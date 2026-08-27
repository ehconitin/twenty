import { useCallRecordingWidgetCount } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetCount';
import { useSelectedCallRecordingForTranscript } from '@/page-layout/widgets/call-recording/hooks/useSelectedCallRecordingForTranscript';

export const useCallRecordingTranscriptWidgetData = () => {
  const selectedCallRecording = useSelectedCallRecordingForTranscript();
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
