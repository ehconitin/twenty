import {
  FieldMetadataType,
  RecordFilterGroupLogicalOperator,
  ViewFilterOperand,
} from '@/types';
import { computeRecordGqlOperationFilter } from '@/utils/filter/computeRecordGqlOperationFilter';
import { replaceWidgetFilterPeriodsWithDashboardFilter } from '@/utils/pageLayout/replaceWidgetFilterPeriodsWithDashboardFilter';

const CLOSE_DATE = 'close-date-field-id';
const CREATED_AT = 'created-at-field-id';
const STAGE = 'stage-field-id';

type TestRecordFilter = {
  id: string;
  fieldMetadataId: string;
  operand: ViewFilterOperand;
  value: string;
  recordFilterGroupId?: string | null;
};

const condition = ({
  id,
  operand,
  fieldMetadataId = CLOSE_DATE,
  recordFilterGroupId,
}: {
  id: string;
  operand: ViewFilterOperand;
  fieldMetadataId?: string;
  recordFilterGroupId?: string;
}): TestRecordFilter => ({
  id,
  fieldMetadataId,
  operand,
  value: '',
  recordFilterGroupId,
});

const THIS_QUARTER = condition({
  id: 'this-quarter',
  operand: ViewFilterOperand.IS_RELATIVE,
});
const WON = condition({
  id: 'won',
  operand: ViewFilterOperand.IS,
  fieldMetadataId: STAGE,
});

const replace = ({
  recordFilters,
  recordFilterGroups = [],
  fieldMetadataIds = [CLOSE_DATE],
}: {
  recordFilters: TestRecordFilter[];
  recordFilterGroups?: {
    id: string;
    logicalOperator: RecordFilterGroupLogicalOperator;
    parentRecordFilterGroupId?: string;
  }[];
  fieldMetadataIds?: string[];
}) =>
  replaceWidgetFilterPeriodsWithDashboardFilter({
    filter: { recordFilters, recordFilterGroups },
    fieldMetadataIds,
  });

const getIds = (recordFilters: TestRecordFilter[]) =>
  recordFilters.map(({ id }) => id);

describe('replaceWidgetFilterPeriodsWithDashboardFilter', () => {
  it.each([
    ViewFilterOperand.IS_RELATIVE,
    ViewFilterOperand.IS,
    ViewFilterOperand.IS_TODAY,
  ])('should replace a %s period on the field', (operand) => {
    const period = condition({ id: 'period', operand });

    expect(replace({ recordFilters: [period, WON] })).toEqual({
      filter: { recordFilters: [WON], recordFilterGroups: [] },
      replacedRecordFilters: [period],
      stillFilteredFieldMetadataIds: [],
    });
  });

  it.each([
    ViewFilterOperand.IS_BEFORE,
    ViewFilterOperand.IS_AFTER,
    ViewFilterOperand.IS_IN_PAST,
    ViewFilterOperand.IS_IN_FUTURE,
    ViewFilterOperand.IS_EMPTY,
    ViewFilterOperand.IS_NOT_EMPTY,
  ])('should keep a lone %s condition on the field', (operand) => {
    const bound = condition({ id: 'bound', operand });

    expect(replace({ recordFilters: [bound] })).toEqual({
      filter: { recordFilters: [bound], recordFilterGroups: [] },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [CLOSE_DATE],
    });
  });

  it('should replace an after + before pair like one period', () => {
    const after = condition({
      id: 'after',
      operand: ViewFilterOperand.IS_AFTER,
    });
    const before = condition({
      id: 'before',
      operand: ViewFilterOperand.IS_BEFORE,
    });

    const { filter, replacedRecordFilters } = replace({
      recordFilters: [after, before, WON],
    });

    expect(getIds(filter.recordFilters)).toEqual(['won']);
    expect(getIds(replacedRecordFilters)).toEqual(['after', 'before']);
  });

  it('should replace a pair and a relative period together', () => {
    const after = condition({
      id: 'after',
      operand: ViewFilterOperand.IS_AFTER,
    });
    const before = condition({
      id: 'before',
      operand: ViewFilterOperand.IS_BEFORE,
    });

    expect(
      getIds(
        replace({ recordFilters: [after, THIS_QUARTER, before] })
          .replacedRecordFilters,
      ),
    ).toEqual(['after', 'this-quarter', 'before']);
  });

  it('should keep every bound when the field has two afters and one before', () => {
    const recordFilters = [
      condition({ id: 'after-2020', operand: ViewFilterOperand.IS_AFTER }),
      condition({ id: 'after-2024', operand: ViewFilterOperand.IS_AFTER }),
      condition({ id: 'before-2025', operand: ViewFilterOperand.IS_BEFORE }),
    ];

    expect(replace({ recordFilters })).toEqual({
      filter: { recordFilters, recordFilterGroups: [] },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [CLOSE_DATE],
    });
  });

  it('should keep every bound when the field has one after and two befores', () => {
    const recordFilters = [
      condition({ id: 'after-2020', operand: ViewFilterOperand.IS_AFTER }),
      condition({ id: 'before-2024', operand: ViewFilterOperand.IS_BEFORE }),
      condition({ id: 'before-2025', operand: ViewFilterOperand.IS_BEFORE }),
    ];

    expect(replace({ recordFilters })).toEqual({
      filter: { recordFilters, recordFilterGroups: [] },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [CLOSE_DATE],
    });
  });

  it('should still replace a relative period next to bounds it cannot pair', () => {
    const recordFilters = [
      condition({ id: 'after-2020', operand: ViewFilterOperand.IS_AFTER }),
      condition({ id: 'after-2024', operand: ViewFilterOperand.IS_AFTER }),
      condition({ id: 'before-2025', operand: ViewFilterOperand.IS_BEFORE }),
    ];

    const { filter, replacedRecordFilters } = replace({
      recordFilters: [...recordFilters, THIS_QUARTER],
    });

    expect(filter.recordFilters).toEqual(recordFilters);
    expect(replacedRecordFilters).toEqual([THIS_QUARTER]);
  });

  it('should replace two periods on the field', () => {
    const today = condition({
      id: 'today',
      operand: ViewFilterOperand.IS_TODAY,
    });

    const { filter, replacedRecordFilters } = replace({
      recordFilters: [THIS_QUARTER, today],
    });

    expect(filter.recordFilters).toEqual([]);
    expect(getIds(replacedRecordFilters)).toEqual(['this-quarter', 'today']);
  });

  it('should keep a non-period condition next to a replaced period', () => {
    const inThePast = condition({
      id: 'in-the-past',
      operand: ViewFilterOperand.IS_IN_PAST,
    });

    expect(replace({ recordFilters: [THIS_QUARTER, inThePast] })).toEqual({
      filter: { recordFilters: [inThePast], recordFilterGroups: [] },
      replacedRecordFilters: [THIS_QUARTER],
      stillFilteredFieldMetadataIds: [CLOSE_DATE],
    });
  });

  it('should keep a period on another field', () => {
    const createdThisQuarter = condition({
      id: 'created',
      operand: ViewFilterOperand.IS_RELATIVE,
      fieldMetadataId: CREATED_AT,
    });

    expect(
      replace({ recordFilters: [createdThisQuarter] }).filter.recordFilters,
    ).toEqual([createdThisQuarter]);
  });

  it('should replace nothing without a field, as with no value or an ignored or unresolved filter', () => {
    expect(
      replace({ recordFilters: [THIS_QUARTER], fieldMetadataIds: [] }),
    ).toEqual({
      filter: { recordFilters: [THIS_QUARTER], recordFilterGroups: [] },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [],
    });
  });

  it('should replace a period in a root AND group and keep the group it empties', () => {
    const rootGroup = {
      id: 'root',
      logicalOperator: RecordFilterGroupLogicalOperator.AND,
    };
    const period = condition({
      id: 'period',
      operand: ViewFilterOperand.IS_RELATIVE,
      recordFilterGroupId: 'root',
    });

    expect(
      replace({ recordFilters: [period], recordFilterGroups: [rootGroup] }),
    ).toEqual({
      filter: { recordFilters: [], recordFilterGroups: [rootGroup] },
      replacedRecordFilters: [period],
      stillFilteredFieldMetadataIds: [],
    });
  });

  it('should keep a root AND group that still holds a condition', () => {
    const rootGroup = {
      id: 'root',
      logicalOperator: RecordFilterGroupLogicalOperator.AND,
    };
    const period = condition({
      id: 'period',
      operand: ViewFilterOperand.IS_RELATIVE,
      recordFilterGroupId: 'root',
    });
    const wonInRoot = { ...WON, recordFilterGroupId: 'root' };

    expect(
      replace({
        recordFilters: [period, wonInRoot],
        recordFilterGroups: [rootGroup],
      }).filter,
    ).toEqual({ recordFilters: [wonInRoot], recordFilterGroups: [rootGroup] });
  });

  it('should keep everything under a root OR group', () => {
    const rootGroup = {
      id: 'root',
      logicalOperator: RecordFilterGroupLogicalOperator.OR,
    };
    const thisMonth = condition({
      id: 'this-month',
      operand: ViewFilterOperand.IS_RELATIVE,
      recordFilterGroupId: 'root',
    });
    const wonInRoot = { ...WON, recordFilterGroupId: 'root' };

    expect(
      replace({
        recordFilters: [thisMonth, wonInRoot],
        recordFilterGroups: [rootGroup],
      }),
    ).toEqual({
      filter: {
        recordFilters: [thisMonth, wonInRoot],
        recordFilterGroups: [rootGroup],
      },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [CLOSE_DATE],
    });
  });

  it('should keep a period and a pair inside a nested group', () => {
    const recordFilterGroups = [
      { id: 'root', logicalOperator: RecordFilterGroupLogicalOperator.AND },
      {
        id: 'nested',
        logicalOperator: RecordFilterGroupLogicalOperator.AND,
        parentRecordFilterGroupId: 'root',
      },
    ];
    const nested = { recordFilterGroupId: 'nested' };
    const recordFilters = [
      condition({
        id: 'period',
        operand: ViewFilterOperand.IS_RELATIVE,
        ...nested,
      }),
      condition({
        id: 'after',
        operand: ViewFilterOperand.IS_AFTER,
        ...nested,
      }),
      condition({
        id: 'before',
        operand: ViewFilterOperand.IS_BEFORE,
        ...nested,
      }),
    ];

    expect(replace({ recordFilters, recordFilterGroups }).filter).toEqual({
      recordFilters,
      recordFilterGroups,
    });
  });

  it('should not pair a top-level bound with one inside a nested group', () => {
    const recordFilterGroups = [
      { id: 'root', logicalOperator: RecordFilterGroupLogicalOperator.AND },
      {
        id: 'nested',
        logicalOperator: RecordFilterGroupLogicalOperator.OR,
        parentRecordFilterGroupId: 'root',
      },
    ];
    const recordFilters = [
      condition({ id: 'after', operand: ViewFilterOperand.IS_AFTER }),
      condition({
        id: 'before',
        operand: ViewFilterOperand.IS_BEFORE,
        recordFilterGroupId: 'nested',
      }),
    ];

    expect(
      replace({ recordFilters, recordFilterGroups }).replacedRecordFilters,
    ).toEqual([]);
  });

  // Field types never change the rule: DATE and DATE_TIME store the same operands
  it('should treat every field the dashboard filter applies to alike', () => {
    const createdToday = condition({
      id: 'created-today',
      operand: ViewFilterOperand.IS_TODAY,
      fieldMetadataId: CREATED_AT,
    });

    expect(
      replace({
        recordFilters: [THIS_QUARTER, createdToday],
        fieldMetadataIds: [CLOSE_DATE, CREATED_AT],
      }).filter.recordFilters,
    ).toEqual([]);
  });

  it('should accept a missing filter', () => {
    expect(
      replaceWidgetFilterPeriodsWithDashboardFilter({
        filter: undefined,
        fieldMetadataIds: [CLOSE_DATE],
      }),
    ).toEqual({
      filter: { recordFilters: [], recordFilterGroups: [] },
      replacedRecordFilters: [],
      stillFilteredFieldMetadataIds: [],
    });
  });

  describe('with the root group the query compiler applies', () => {
    const FIELDS = [
      {
        id: CLOSE_DATE,
        name: 'closeDate',
        label: 'Close date',
        type: FieldMetadataType.DATE_TIME,
      },
      {
        id: STAGE,
        name: 'stage',
        label: 'Stage',
        type: FieldMetadataType.TEXT,
      },
    ];

    const compile = ({
      recordFilters,
      recordFilterGroups,
    }: ReturnType<typeof replace>['filter']) =>
      computeRecordGqlOperationFilter({
        fieldMetadataItems: FIELDS,
        recordFilters,
        recordFilterGroups,
        filterValueDependencies: { timeZone: 'UTC' },
      });

    const AND_GROUP = (id: string) => ({
      id,
      logicalOperator: RecordFilterGroupLogicalOperator.AND,
    });

    it('should never promote a parentless group the compiler ignored', () => {
      const day = {
        ...condition({
          id: 'day',
          operand: ViewFilterOperand.IS,
          recordFilterGroupId: 'first-root',
        }),
        value: '2026-01-01',
      };
      const stageInIgnoredGroup = {
        ...condition({
          id: 'won',
          operand: ViewFilterOperand.CONTAINS,
          fieldMetadataId: STAGE,
          recordFilterGroupId: 'ignored-root',
        }),
        value: 'won',
      };

      const { filter } = replace({
        recordFilters: [day, stageInIgnoredGroup],
        recordFilterGroups: [
          AND_GROUP('first-root'),
          AND_GROUP('ignored-root'),
        ],
      });

      expect(filter.recordFilters).toEqual([stageInIgnoredGroup]);
      expect(compile(filter)).toEqual({ and: [] });
    });

    it('should keep a period in a second parentless group', () => {
      const periodInIgnoredGroup = condition({
        id: 'period',
        operand: ViewFilterOperand.IS_RELATIVE,
        recordFilterGroupId: 'ignored-root',
      });

      expect(
        replace({
          recordFilters: [periodInIgnoredGroup],
          recordFilterGroups: [
            AND_GROUP('first-root'),
            AND_GROUP('ignored-root'),
          ],
        }).replacedRecordFilters,
      ).toEqual([]);
    });

    it('should pair an ungrouped bound with one in the root AND group, both ANDed at the root', () => {
      expect(
        getIds(
          replace({
            recordFilters: [
              condition({ id: 'after', operand: ViewFilterOperand.IS_AFTER }),
              condition({
                id: 'before',
                operand: ViewFilterOperand.IS_BEFORE,
                recordFilterGroupId: 'root',
              }),
            ],
            recordFilterGroups: [AND_GROUP('root')],
          }).replacedRecordFilters,
        ),
      ).toEqual(['after', 'before']);
    });

    it('should replace an ungrouped period next to a root OR group and keep the group', () => {
      const thisQuarter = condition({
        id: 'this-quarter',
        operand: ViewFilterOperand.IS_RELATIVE,
      });
      const inThePastInOr = condition({
        id: 'in-the-past',
        operand: ViewFilterOperand.IS_IN_PAST,
        recordFilterGroupId: 'root',
      });
      const rootOrGroup = {
        id: 'root',
        logicalOperator: RecordFilterGroupLogicalOperator.OR,
      };

      expect(
        replace({
          recordFilters: [thisQuarter, inThePastInOr],
          recordFilterGroups: [rootOrGroup],
        }),
      ).toEqual({
        filter: {
          recordFilters: [inThePastInOr],
          recordFilterGroups: [rootOrGroup],
        },
        replacedRecordFilters: [thisQuarter],
        stillFilteredFieldMetadataIds: [CLOSE_DATE],
      });
    });

    it('should leave an emptied root group and its empty child to compile to no condition', () => {
      const period = condition({
        id: 'period',
        operand: ViewFilterOperand.IS_RELATIVE,
        recordFilterGroupId: 'root',
      });

      const { filter } = replace({
        recordFilters: [period],
        recordFilterGroups: [
          AND_GROUP('root'),
          {
            id: 'nested',
            logicalOperator: RecordFilterGroupLogicalOperator.OR,
            parentRecordFilterGroupId: 'root',
          },
        ],
      });

      expect(compile(filter)).toEqual({ and: [{ or: [] }] });
    });
  });
});
