import { RecordFilterGroupLogicalOperator, ViewFilterOperand } from '@/types';
import { findRootRecordFilterGroup } from '@/utils/filter/findRootRecordFilterGroup';
import { DASHBOARD_FILTER_PERIOD_OPERANDS } from '@/utils/pageLayout/internal/DashboardFilterPeriodOperands';
import { isDefined } from '@/utils/validation/isDefined';

type WidgetRecordFilter = {
  fieldMetadataId: string;
  operand: string;
  recordFilterGroupId?: string | null;
};

type WidgetRecordFilterGroup = {
  id: string;
  logicalOperator: string;
  parentRecordFilterGroupId?: string | null;
};

const countConditionsWithOperand = ({
  conditions,
  operand,
}: {
  conditions: WidgetRecordFilter[];
  operand: ViewFilterOperand;
}) => conditions.filter((condition) => condition.operand === operand).length;

// An after + before pair is how the dashboard stores its own custom range
const isPeriodCondition = ({
  recordFilter: { operand },
  conditionsOnField,
}: {
  recordFilter: WidgetRecordFilter;
  conditionsOnField: WidgetRecordFilter[];
}) =>
  DASHBOARD_FILTER_PERIOD_OPERANDS.some(
    (periodOperand) => periodOperand === operand,
  ) ||
  ((operand === ViewFilterOperand.IS_AFTER ||
    operand === ViewFilterOperand.IS_BEFORE) &&
    countConditionsWithOperand({
      conditions: conditionsOnField,
      operand: ViewFilterOperand.IS_AFTER,
    }) === 1 &&
    countConditionsWithOperand({
      conditions: conditionsOnField,
      operand: ViewFilterOperand.IS_BEFORE,
    }) === 1);

// Only conditions ANDed at the root can be replaced: ungrouped ones and those in the root group when it is an AND
export const replaceWidgetFilterPeriodsWithDashboardFilter = <
  TRecordFilter extends WidgetRecordFilter,
  TRecordFilterGroup extends WidgetRecordFilterGroup,
>({
  filter,
  fieldMetadataIds,
}: {
  filter:
    | {
        recordFilters?: TRecordFilter[];
        recordFilterGroups?: TRecordFilterGroup[];
      }
    | null
    | undefined;
  fieldMetadataIds: string[];
}): {
  filter: {
    recordFilters: TRecordFilter[];
    recordFilterGroups: TRecordFilterGroup[];
  };
  replacedRecordFilters: TRecordFilter[];
  stillFilteredFieldMetadataIds: string[];
} => {
  const recordFilters = filter?.recordFilters ?? [];
  const recordFilterGroups = filter?.recordFilterGroups ?? [];

  const rootRecordFilterGroup = findRootRecordFilterGroup(recordFilterGroups);
  const rootAndRecordFilterGroupId =
    rootRecordFilterGroup?.logicalOperator ===
    RecordFilterGroupLogicalOperator.AND
      ? rootRecordFilterGroup.id
      : undefined;

  const replaceableRecordFilters = recordFilters.filter(
    ({ fieldMetadataId, recordFilterGroupId }) =>
      fieldMetadataIds.includes(fieldMetadataId) &&
      (!isDefined(recordFilterGroupId) ||
        recordFilterGroupId === rootAndRecordFilterGroupId),
  );

  const replacedRecordFilters = replaceableRecordFilters.filter(
    (recordFilter) =>
      isPeriodCondition({
        recordFilter,
        conditionsOnField: replaceableRecordFilters.filter(
          ({ fieldMetadataId }) =>
            fieldMetadataId === recordFilter.fieldMetadataId,
        ),
      }),
  );

  const keptRecordFilters = recordFilters.filter(
    (recordFilter) => !replacedRecordFilters.includes(recordFilter),
  );

  return {
    filter: {
      recordFilters: keptRecordFilters,
      // An emptied group stays, so the compiler keeps the same root; empty, it filters nothing
      recordFilterGroups,
    },
    replacedRecordFilters,
    stillFilteredFieldMetadataIds: fieldMetadataIds.filter((fieldMetadataId) =>
      keptRecordFilters.some(
        (recordFilter) => recordFilter.fieldMetadataId === fieldMetadataId,
      ),
    ),
  };
};
