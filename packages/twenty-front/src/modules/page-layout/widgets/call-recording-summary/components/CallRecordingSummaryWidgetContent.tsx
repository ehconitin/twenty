import { useCallRecordingWidgetTarget } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetTarget';
import { useWidgetCallRecording } from '@/page-layout/widgets/call-recording/hooks/useWidgetCallRecording';
import { CallRecordingSummaryBody } from '@/page-layout/widgets/call-recording-summary/components/CallRecordingSummaryBody';
import { CallRecordingSummaryHeaderDataEffect } from '@/page-layout/widgets/call-recording-summary/components/CallRecordingSummaryHeaderDataEffect';
import { getCallRecordingSummaryMarkdown } from '@/page-layout/widgets/call-recording-summary/utils/getCallRecordingSummaryMarkdown';
import { WidgetHeaderCountEffect } from '@/page-layout/widgets/components/WidgetHeaderCountEffect';
import { isDefined } from 'twenty-shared/utils';

export const CallRecordingSummaryWidgetContent = () => {
  const callRecordingWidgetTarget = useCallRecordingWidgetTarget();
  const { callRecording, callRecordingsCount, loading, error, restriction } =
    useWidgetCallRecording({ queryScope: 'call-recording-summary' });

  const canExposeCallRecordingHeaderData =
    !loading && !isDefined(error) && !isDefined(restriction);

  const summaryMarkdown = getCallRecordingSummaryMarkdown(
    canExposeCallRecordingHeaderData ? callRecording : undefined,
  );

  const calendarEventHeaderCount = canExposeCallRecordingHeaderData
    ? callRecordingsCount
    : 0;

  const headerCount =
    callRecordingWidgetTarget?.targetKind === 'calendarEvent'
      ? calendarEventHeaderCount
      : undefined;

  return (
    <>
      <WidgetHeaderCountEffect count={headerCount} />
      <CallRecordingSummaryHeaderDataEffect summaryMarkdown={summaryMarkdown} />
      <CallRecordingSummaryBody
        callRecording={callRecording}
        loading={loading}
        error={error}
        restriction={restriction}
      />
    </>
  );
};
