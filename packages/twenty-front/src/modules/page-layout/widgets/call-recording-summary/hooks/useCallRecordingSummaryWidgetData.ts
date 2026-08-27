import { useCallRecordingWidgetCount } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetCount';
import { useSelectedCallRecordingForSummary } from '@/page-layout/widgets/call-recording/hooks/useSelectedCallRecordingForSummary';

export const useCallRecordingSummaryWidgetData = () => {
  const selectedCallRecording = useSelectedCallRecordingForSummary();
  const callRecordingCount = useCallRecordingWidgetCount({
    restriction: selectedCallRecording.restriction,
    refetchSelectedCallRecording: selectedCallRecording.refetch,
  });

  return {
    callRecording: selectedCallRecording.callRecording,
    callRecordingsCount: callRecordingCount.callRecordingsCount,
    loading: selectedCallRecording.loading || callRecordingCount.loading,
    error: selectedCallRecording.error ?? callRecordingCount.error,
    restriction: selectedCallRecording.restriction,
    refetch: callRecordingCount.refetch,
  };
};
