import { DASHBOARD_DATE_RANGE_FILTER_ID } from 'twenty-shared/constants';
import { getDraftWithPageLayoutFilterDefaultValue } from '@/page-layout/utils/getDraftWithPageLayoutFilterDefaultValue';
import { makeDraft } from '@/page-layout/testing/pageLayoutDraftFixtures';
import {
  PageLayoutFilterType,
  ViewFilterOperand,
} from '~/generated-metadata/graphql';

const THIS_MONTH = {
  conditions: [
    { operand: ViewFilterOperand.IS_RELATIVE, value: 'THIS_1_MONTH' },
  ],
};

const SIGNUP_FILTER = {
  id: '6f2b8f1e-6a3c-4f4e-9d61-2f1c8a7b5e02',
  label: 'Signup',
  type: PageLayoutFilterType.DATE,
  position: 0,
  defaultValue: null,
};

describe('getDraftWithPageLayoutFilterDefaultValue', () => {
  it('should write the built-in Date range into the draft filters with its default', () => {
    expect(
      getDraftWithPageLayoutFilterDefaultValue({
        pageLayoutDraft: makeDraft([]),
        pageLayoutFilterId: DASHBOARD_DATE_RANGE_FILTER_ID,
        defaultValue: THIS_MONTH,
      }).filters,
    ).toEqual([
      {
        id: DASHBOARD_DATE_RANGE_FILTER_ID,
        label: 'Date range',
        type: PageLayoutFilterType.DATE,
        position: 0,
        defaultValue: THIS_MONTH,
      },
    ]);
  });

  it('should keep the built-in Date range in the draft when its default is cleared', () => {
    expect(
      getDraftWithPageLayoutFilterDefaultValue({
        pageLayoutDraft: makeDraft([]),
        pageLayoutFilterId: DASHBOARD_DATE_RANGE_FILTER_ID,
        defaultValue: null,
      }).filters,
    ).toMatchObject([
      { id: DASHBOARD_DATE_RANGE_FILTER_ID, defaultValue: null },
    ]);
  });

  it('should set the default of a stored filter only', () => {
    expect(
      getDraftWithPageLayoutFilterDefaultValue({
        pageLayoutDraft: { ...makeDraft([]), filters: [SIGNUP_FILTER] },
        pageLayoutFilterId: SIGNUP_FILTER.id,
        defaultValue: THIS_MONTH,
      }).filters,
    ).toEqual([{ ...SIGNUP_FILTER, defaultValue: THIS_MONTH }]);
  });
});
