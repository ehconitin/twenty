import { gql } from '@apollo/client';

export const SELECTED_CALL_RECORDING_ID = gql`
  query SelectedCallRecordingId($calendarEventId: UUID!) {
    selectedCallRecordingId(calendarEventId: $calendarEventId)
  }
`;
