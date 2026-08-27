import { useListenToObjectRecordOperationBrowserEvent } from '@/browser-event/hooks/useListenToObjectRecordOperationBrowserEvent';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { useFindManyRecords } from '@/object-record/hooks/useFindManyRecords';
import { useCallRecordingWidgetTarget } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetTarget';
import {
  type CallRecordingWidgetQueryScope,
  useSelectedCallRecording,
} from '@/page-layout/widgets/call-recording/hooks/useSelectedCallRecording';
import { type WidgetCallRecordingCandidate } from '@/page-layout/widgets/call-recording/types/WidgetCallRecordingCandidate';
import { type WidgetAccessDenialInfo } from '@/page-layout/widgets/types/WidgetAccessDenialInfo';
import { useListenToEventsForQuery } from '@/sse-db-event/hooks/useListenToEventsForQuery';
import { useCallback, useMemo } from 'react';
import { CoreObjectNameSingular } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

export const useWidgetCallRecording = ({
  queryScope,
}: {
  queryScope: CallRecordingWidgetQueryScope;
}): {
  callRecording: WidgetCallRecordingCandidate | undefined;
  callRecordingsCount: number;
  loading: boolean;
  error: Error | undefined;
  restriction: WidgetAccessDenialInfo | undefined;
  refetch: () => Promise<unknown>;
} => {
  const callRecordingWidgetTarget = useCallRecordingWidgetTarget();
  const targetKind = callRecordingWidgetTarget?.targetKind;
  const targetRecordId = callRecordingWidgetTarget?.recordId;

  const {
    callRecording,
    loading: selectedCallRecordingLoading,
    error: selectedCallRecordingError,
    restriction,
    refetch: refetchSelectedCallRecording,
  } = useSelectedCallRecording({ queryScope });

  const { objectMetadataItem: callRecordingObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.CallRecording,
    });

  const shouldSkipQuery = !isDefined(targetRecordId) || isDefined(restriction);

  const callRecordingFilter = useMemo(() => {
    if (!isDefined(targetRecordId)) {
      return undefined;
    }

    return targetKind === 'calendarEvent'
      ? { calendarEventId: { eq: targetRecordId } }
      : { id: { eq: targetRecordId } };
  }, [targetKind, targetRecordId]);

  const {
    records: callRecordingCountRecords,
    totalCount: callRecordingsTotalCount,
    loading: callRecordingsCountLoading,
    error: callRecordingsCountError,
    refetch: refetchCallRecordingsCount,
  } = useFindManyRecords<WidgetCallRecordingCandidate>({
    objectNameSingular: CoreObjectNameSingular.CallRecording,
    filter: callRecordingFilter,
    recordGqlFields: { id: true },
    limit: 1,
    withSoftDeleted: targetKind === 'callRecording',
    skip: shouldSkipQuery,
  });

  const operationSignature = useMemo(
    () => ({
      objectNameSingular: CoreObjectNameSingular.CallRecording,
      variables: {
        filter: callRecordingFilter,
      },
    }),
    [callRecordingFilter],
  );

  const refetch = useCallback(async () => {
    await Promise.all([
      refetchSelectedCallRecording(),
      refetchCallRecordingsCount(),
    ]);
  }, [refetchCallRecordingsCount, refetchSelectedCallRecording]);

  const refetchCallRecordingOnSseReconnected = useCallback(async () => {
    await refetch();
  }, [refetch]);

  useListenToEventsForQuery({
    queryId: `${queryScope}-${targetRecordId}`,
    operationSignature,
    skip: shouldSkipQuery,
    onSseReconnected: refetchCallRecordingOnSseReconnected,
  });

  const handleCallRecordingOperation = useCallback(() => {
    if (shouldSkipQuery) {
      return;
    }

    refetch();
  }, [shouldSkipQuery, refetch]);

  useListenToObjectRecordOperationBrowserEvent({
    onObjectRecordOperationBrowserEvent: handleCallRecordingOperation,
    objectMetadataItemId: callRecordingObjectMetadataItem.id,
  });

  return {
    callRecording,
    callRecordingsCount:
      callRecordingsTotalCount ?? callRecordingCountRecords.length,
    loading: selectedCallRecordingLoading || callRecordingsCountLoading,
    error: selectedCallRecordingError ?? callRecordingsCountError,
    restriction,
    refetch,
  };
};
