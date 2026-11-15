import { type PersistedRecordFilter } from '@/object-record/record-filter/types/PersistedRecordFilter';

export type DashboardRecordFilter = Pick<
  PersistedRecordFilter,
  'fieldMetadataId' | 'operand' | 'value'
>;
