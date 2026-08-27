import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { useCallRecordingWidgetRestriction } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetRestriction';
import { useSelectedCallRecordingId } from '@/page-layout/widgets/call-recording/hooks/useSelectedCallRecordingId';
import { type WidgetCallRecordingCandidate } from '@/page-layout/widgets/call-recording/types/WidgetCallRecordingCandidate';
import { type WidgetAccessDenialInfo } from '@/page-layout/widgets/types/WidgetAccessDenialInfo';
import { useCallback } from 'react';
import {
  CoreObjectNameSingular,
  type RecordGqlOperationGqlRecordFields,
} from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

const CALL_RECORDING_SUMMARY_RECORD_FIELDS = {
  id: true,
  status: true,
  summary: true,
  createdAt: true,
} as const satisfies RecordGqlOperationGqlRecordFields;

export const useSelectedCallRecordingForSummary = (): {
  callRecording: WidgetCallRecordingCandidate | undefined;
  loading: boolean;
  error: Error | undefined;
  restriction: WidgetAccessDenialInfo | undefined;
  refetch: () => Promise<unknown>;
} => {
  const { restriction } = useCallRecordingWidgetRestriction({
    requiredFieldNames: ['status', 'summary', 'createdAt'],
  });
  const shouldSkipQuery = isDefined(restriction);

  const {
    selectedCallRecordingId,
    targetKind,
    loading: selectedCallRecordingIdLoading,
    error: selectedCallRecordingIdError,
    refetch: refetchSelectedCallRecordingId,
  } = useSelectedCallRecordingId({ skip: shouldSkipQuery });

  const {
    record: callRecording,
    loading: callRecordingLoading,
    error: callRecordingError,
    refetch: refetchCallRecording,
  } = useFindOneRecord<WidgetCallRecordingCandidate>({
    objectNameSingular: CoreObjectNameSingular.CallRecording,
    objectRecordId: selectedCallRecordingId,
    recordGqlFields: CALL_RECORDING_SUMMARY_RECORD_FIELDS,
    withSoftDeleted: targetKind === 'callRecording',
    skip: shouldSkipQuery || !isDefined(selectedCallRecordingId),
  });

  const refetch = useCallback(async () => {
    await Promise.all([
      refetchSelectedCallRecordingId(),
      isDefined(selectedCallRecordingId)
        ? refetchCallRecording()
        : Promise.resolve(),
    ]);
  }, [
    refetchCallRecording,
    refetchSelectedCallRecordingId,
    selectedCallRecordingId,
  ]);

  return {
    callRecording,
    loading: selectedCallRecordingIdLoading || callRecordingLoading,
    error: selectedCallRecordingIdError ?? callRecordingError,
    restriction,
    refetch,
  };
};
