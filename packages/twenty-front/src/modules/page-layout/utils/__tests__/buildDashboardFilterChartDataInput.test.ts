import { buildDashboardFilterChartDataInput } from '@/page-layout/utils/buildDashboardFilterChartDataInput';
import { Temporal } from 'temporal-polyfill';
import {
  type DashboardFilterValue,
  FieldMetadataType,
  FirstDayOfTheWeek,
  PageLayoutFilterType,
  ViewFilterOperand,
} from 'twenty-shared/types';

const DATE_RANGE_FILTER_ID = 'date-range-filter-id';
const CLOSE_DATE_FIELD = {
  id: 'close-date-id',
  type: FieldMetadataType.DATE,
};

const JANUARY_15_TO_MARCH_10: DashboardFilterValue[] = [
  {
    pageLayoutFilterId: DATE_RANGE_FILTER_ID,
    type: PageLayoutFilterType.DATE,
    conditions: [
      { operand: ViewFilterOperand.IS_AFTER, value: '2026-01-15' },
      { operand: ViewFilterOperand.IS_BEFORE, value: '2026-03-11' },
    ],
  },
];

const APPLIED_ON_CLOSE_DATE = {
  recordFilters: [
    {
      fieldMetadataId: CLOSE_DATE_FIELD.id,
      operand: ViewFilterOperand.IS_AFTER,
      value: '2026-01-15',
    },
    {
      fieldMetadataId: CLOSE_DATE_FIELD.id,
      operand: ViewFilterOperand.IS_BEFORE,
      value: '2026-03-11',
    },
  ],
  appliedFields: [
    {
      pageLayoutFilterId: DATE_RANGE_FILTER_ID,
      fieldMetadataId: CLOSE_DATE_FIELD.id,
      source: 'GROUP_BY' as const,
    },
  ],
};

const CONFIGURATION = {
  primaryAxisGroupByFieldMetadataId: CLOSE_DATE_FIELD.id,
  filter: {
    recordFilters: [
      {
        fieldMetadataId: CLOSE_DATE_FIELD.id,
        operand: ViewFilterOperand.IS_RELATIVE,
        value: 'THIS_1_MONTH',
      },
      {
        fieldMetadataId: 'stage-id',
        operand: ViewFilterOperand.IS,
        value: '["WON"]',
      },
    ],
  },
};

const buildInput = (
  overrides: Partial<
    Parameters<
      typeof buildDashboardFilterChartDataInput<typeof CONFIGURATION>
    >[0]
  >,
) =>
  buildDashboardFilterChartDataInput({
    configuration: CONFIGURATION,
    dashboardFilters: {
      values: JANUARY_15_TO_MARCH_10,
      timeZone: 'Europe/Paris',
      firstDayOfTheWeek: FirstDayOfTheWeek.MONDAY,
    },
    widgetDashboardFilter: APPLIED_ON_CLOSE_DATE,
    primaryAxisDateField: CLOSE_DATE_FIELD,
    now: Temporal.Instant.from('2026-03-11T23:30:00Z'),
    ...overrides,
  });

describe('buildDashboardFilterChartDataInput', () => {
  it('should send only the time zone when no dashboard filter applies', () => {
    expect(
      buildInput({
        dashboardFilters: {
          values: [],
          timeZone: 'Europe/Paris',
          firstDayOfTheWeek: FirstDayOfTheWeek.MONDAY,
        },
        widgetDashboardFilter: { recordFilters: [], appliedFields: [] },
      }),
    ).toEqual({ configuration: CONFIGURATION, viewerTimeZone: 'Europe/Paris' });
  });

  it("should send the chart its filter with the dashboard's range in place of its own period", () => {
    const { configuration } = buildInput({});

    expect(
      configuration.filter.recordFilters.map(
        ({ fieldMetadataId, operand, value }) => [
          fieldMetadataId,
          operand,
          value,
        ],
      ),
    ).toEqual([
      ['stage-id', ViewFilterOperand.IS, '["WON"]'],
      [CLOSE_DATE_FIELD.id, ViewFilterOperand.IS_AFTER, '2026-01-15'],
      [CLOSE_DATE_FIELD.id, ViewFilterOperand.IS_BEFORE, '2026-03-11'],
    ]);
    expect(configuration.primaryAxisGroupByFieldMetadataId).toBe(
      CLOSE_DATE_FIELD.id,
    );
  });

  it('should ask the date axis to cover the range, up to its last included day', () => {
    expect(buildInput({}).primaryAxisDateRange).toEqual({
      start: '2026-01-15',
      end: '2026-03-10',
    });
  });

  it('should leave an open side of the range out', () => {
    expect(
      buildInput({
        dashboardFilters: {
          values: [
            {
              pageLayoutFilterId: DATE_RANGE_FILTER_ID,
              type: PageLayoutFilterType.DATE,
              conditions: [
                { operand: ViewFilterOperand.IS_AFTER, value: '2026-02-20' },
              ],
            },
          ],
          timeZone: 'Europe/Paris',
          firstDayOfTheWeek: FirstDayOfTheWeek.MONDAY,
        },
      }).primaryAxisDateRange,
    ).toEqual({ start: '2026-02-20', end: undefined });
  });

  it("should resolve today in the viewer's time zone", () => {
    const resolveToday = (timeZone: string) =>
      buildInput({
        dashboardFilters: {
          values: [
            {
              pageLayoutFilterId: DATE_RANGE_FILTER_ID,
              type: PageLayoutFilterType.DATE,
              conditions: [{ operand: ViewFilterOperand.IS_TODAY, value: '' }],
            },
          ],
          timeZone,
          firstDayOfTheWeek: FirstDayOfTheWeek.MONDAY,
        },
      }).primaryAxisDateRange;

    expect(resolveToday('UTC')).toEqual({
      start: '2026-03-11',
      end: '2026-03-11',
    });
    expect(resolveToday('Asia/Tokyo')).toEqual({
      start: '2026-03-12',
      end: '2026-03-12',
    });
  });

  it.each([
    ['a chart without a date axis', { primaryAxisDateField: undefined }],
    [
      'a filter applied to another field than the axis',
      {
        widgetDashboardFilter: {
          ...APPLIED_ON_CLOSE_DATE,
          appliedFields: [
            {
              pageLayoutFilterId: DATE_RANGE_FILTER_ID,
              fieldMetadataId: 'created-at-id',
              source: 'OVERRIDE' as const,
            },
          ],
        },
      },
    ],
    [
      'a filter not applied to the widget',
      { widgetDashboardFilter: { recordFilters: [], appliedFields: [] } },
    ],
  ])('should not ask for a date axis range for %s', (_title, overrides) => {
    expect(buildInput(overrides).primaryAxisDateRange).toBeUndefined();
  });
});
