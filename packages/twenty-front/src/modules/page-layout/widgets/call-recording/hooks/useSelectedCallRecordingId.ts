import { SELECTED_CALL_RECORDING_ID } from '@/page-layout/widgets/call-recording/graphql/queries/selectedCallRecordingId';
import { useCallRecordingWidgetTarget } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetTarget';
import { useQuery } from '@apollo/client/react';
import { useCallback } from 'react';
import { isDefined } from 'twenty-shared/utils';

export const useSelectedCallRecordingId = ({
  skip,
}: {
  skip: boolean;
}): {
  selectedCallRecordingId: string | undefined;
  targetKind: 'calendarEvent' | 'callRecording' | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: () => Promise<unknown>;
} => {
  const callRecordingWidgetTarget = useCallRecordingWidgetTarget();
  const targetKind = callRecordingWidgetTarget?.targetKind;
  const targetRecordId = callRecordingWidgetTarget?.recordId;

  const {
    data,
    loading,
    error,
    refetch: refetchSelectedCallRecordingId,
  } = useQuery<{ selectedCallRecordingId: string | null }>(
    SELECTED_CALL_RECORDING_ID,
    {
      variables: { calendarEventId: targetRecordId ?? '' },
      skip:
        skip || !isDefined(targetRecordId) || targetKind !== 'calendarEvent',
    },
  );

  const selectedCallRecordingId =
    targetKind === 'callRecording'
      ? targetRecordId
      : (data?.selectedCallRecordingId ?? undefined);

  const refetch = useCallback(async () => {
    if (skip || targetKind !== 'calendarEvent') {
      return;
    }

    await refetchSelectedCallRecordingId();
  }, [refetchSelectedCallRecordingId, skip, targetKind]);

  return {
    selectedCallRecordingId,
    targetKind,
    loading,
    error,
    refetch,
  };
};
