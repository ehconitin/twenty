import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import { useFindOneRecord } from '@/object-record/hooks/useFindOneRecord';
import { useObjectPermissionsForObject } from '@/object-record/hooks/useObjectPermissionsForObject';
import { SELECTED_CALL_RECORDING_ID } from '@/page-layout/widgets/call-recording/graphql/queries/selectedCallRecordingId';
import { useCallRecordingWidgetTarget } from '@/page-layout/widgets/call-recording/hooks/useCallRecordingWidgetTarget';
import { type WidgetCallRecordingCandidate } from '@/page-layout/widgets/call-recording/types/WidgetCallRecordingCandidate';
import { type WidgetAccessDenialInfo } from '@/page-layout/widgets/types/WidgetAccessDenialInfo';
import { useQuery } from '@apollo/client/react';
import { isNonEmptyString } from '@sniptt/guards';
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

const CALL_RECORDING_TRANSCRIPT_RECORD_FIELDS = {
  id: true,
  status: true,
  transcript: true,
  createdAt: true,
} as const satisfies RecordGqlOperationGqlRecordFields;

const CALL_RECORDING_TRANSCRIPT_WITH_VIDEO_RECORD_FIELDS = {
  ...CALL_RECORDING_TRANSCRIPT_RECORD_FIELDS,
  video: true,
} as const satisfies RecordGqlOperationGqlRecordFields;

export type CallRecordingWidgetQueryScope =
  | 'call-recording-summary'
  | 'call-recording-transcript';

const REQUIRED_FIELD_NAMES_BY_QUERY_SCOPE: Record<
  CallRecordingWidgetQueryScope,
  string[]
> = {
  'call-recording-summary': ['status', 'summary', 'createdAt'],
  'call-recording-transcript': ['status', 'transcript', 'createdAt'],
};

const getCallRecordingRecordFields = ({
  queryScope,
  isVideoFieldRestricted,
}: {
  queryScope: CallRecordingWidgetQueryScope;
  isVideoFieldRestricted: boolean;
}): RecordGqlOperationGqlRecordFields => {
  if (queryScope === 'call-recording-summary') {
    return CALL_RECORDING_SUMMARY_RECORD_FIELDS;
  }

  return isVideoFieldRestricted
    ? CALL_RECORDING_TRANSCRIPT_RECORD_FIELDS
    : CALL_RECORDING_TRANSCRIPT_WITH_VIDEO_RECORD_FIELDS;
};

export const useSelectedCallRecording = ({
  queryScope,
}: {
  queryScope: CallRecordingWidgetQueryScope;
}): {
  callRecording: WidgetCallRecordingCandidate | undefined;
  loading: boolean;
  error: Error | undefined;
  restriction: WidgetAccessDenialInfo | undefined;
  refetch: () => Promise<unknown>;
} => {
  const callRecordingWidgetTarget = useCallRecordingWidgetTarget();
  const targetKind = callRecordingWidgetTarget?.targetKind;
  const targetRecordId = callRecordingWidgetTarget?.recordId;

  const { objectMetadataItem: callRecordingObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.CallRecording,
    });

  const callRecordingObjectPermissions = useObjectPermissionsForObject(
    callRecordingObjectMetadataItem.id,
  );

  const isCallRecordingFieldRestricted = (fieldMetadataItem: { id: string }) =>
    callRecordingObjectPermissions.restrictedFields[fieldMetadataItem.id]
      ?.canRead === false;

  const requiredFieldMetadataItems = REQUIRED_FIELD_NAMES_BY_QUERY_SCOPE[
    queryScope
  ]
    .map((requiredFieldName) =>
      callRecordingObjectMetadataItem.fields.find(
        (fieldMetadataItem) => fieldMetadataItem.name === requiredFieldName,
      ),
    )
    .filter(isDefined);

  const restrictedFieldNames = requiredFieldMetadataItems
    .filter(isCallRecordingFieldRestricted)
    .map((fieldMetadataItem) =>
      isNonEmptyString(fieldMetadataItem.label)
        ? fieldMetadataItem.label
        : fieldMetadataItem.name,
    );

  const objectRestriction: WidgetAccessDenialInfo | undefined =
    callRecordingObjectPermissions.canReadObjectRecords
      ? undefined
      : {
          type: 'object',
          objectName: callRecordingObjectMetadataItem.labelSingular,
        };

  const fieldRestriction: WidgetAccessDenialInfo | undefined =
    restrictedFieldNames.length > 0
      ? { type: 'field', fieldNames: restrictedFieldNames }
      : undefined;

  const restriction = objectRestriction ?? fieldRestriction;
  const shouldSkipQuery = !isDefined(targetRecordId) || isDefined(restriction);

  const videoFieldMetadataItem = callRecordingObjectMetadataItem.fields.find(
    (fieldMetadataItem) => fieldMetadataItem.name === 'video',
  );

  const isVideoFieldRestricted =
    isDefined(videoFieldMetadataItem) &&
    isCallRecordingFieldRestricted(videoFieldMetadataItem);

  const callRecordingRecordFields = getCallRecordingRecordFields({
    queryScope,
    isVideoFieldRestricted,
  });

  const {
    data: selectedCallRecordingIdData,
    loading: selectedCallRecordingIdLoading,
    error: selectedCallRecordingIdError,
    refetch: refetchSelectedCallRecordingId,
  } = useQuery<{ selectedCallRecordingId: string | null }>(
    SELECTED_CALL_RECORDING_ID,
    {
      variables: { calendarEventId: targetRecordId ?? '' },
      skip: shouldSkipQuery || targetKind !== 'calendarEvent',
    },
  );

  const selectedCallRecordingId =
    targetKind === 'callRecording'
      ? targetRecordId
      : (selectedCallRecordingIdData?.selectedCallRecordingId ?? undefined);

  const {
    record: callRecording,
    loading: callRecordingLoading,
    error: callRecordingError,
    refetch: refetchCallRecording,
  } = useFindOneRecord<WidgetCallRecordingCandidate>({
    objectNameSingular: CoreObjectNameSingular.CallRecording,
    objectRecordId: selectedCallRecordingId,
    recordGqlFields: callRecordingRecordFields,
    withSoftDeleted: targetKind === 'callRecording',
    skip: shouldSkipQuery || !isDefined(selectedCallRecordingId),
  });

  const refetch = useCallback(async () => {
    const refetchPromises: Promise<unknown>[] = [];

    if (targetKind === 'calendarEvent' && !shouldSkipQuery) {
      refetchPromises.push(refetchSelectedCallRecordingId());
    }

    if (isDefined(selectedCallRecordingId) && !shouldSkipQuery) {
      refetchPromises.push(refetchCallRecording());
    }

    await Promise.all(refetchPromises);
  }, [
    refetchCallRecording,
    refetchSelectedCallRecordingId,
    selectedCallRecordingId,
    shouldSkipQuery,
    targetKind,
  ]);

  return {
    callRecording,
    loading: selectedCallRecordingIdLoading || callRecordingLoading,
    error: selectedCallRecordingIdError ?? callRecordingError,
    restriction,
    refetch,
  };
};
