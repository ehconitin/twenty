import { useWidgetCallRecording } from '@/page-layout/widgets/call-recording/hooks/useWidgetCallRecording';
import { act, renderHook } from '@testing-library/react';

const mockUseFindManyRecords = jest.fn();
const mockUseListenToEventsForQuery = jest.fn();
const mockRefetchSelectedCallRecording = jest.fn();

const mockLayoutRenderingContext: {
  targetRecordIdentifier?: {
    id: string;
    targetObjectNameSingular: string;
  };
} = {
  targetRecordIdentifier: {
    id: 'calendar-event-id',
    targetObjectNameSingular: 'calendarEvent',
  },
};

let findManyRecordsResult: {
  records: Record<string, unknown>[];
  totalCount: number | undefined;
  loading: boolean;
  error: Error | undefined;
  refetch: jest.Mock;
};

let selectedCallRecordingResult: {
  callRecording: Record<string, unknown> | undefined;
  loading: boolean;
  error: Error | undefined;
  restriction: undefined;
  refetch: jest.Mock;
};

jest.mock('@/object-metadata/hooks/useObjectMetadataItem', () => ({
  useObjectMetadataItem: () => ({
    objectMetadataItem: { id: 'call-recording-object-id' },
  }),
}));

jest.mock('@/object-record/hooks/useFindManyRecords', () => ({
  useFindManyRecords: (parameters: unknown) => {
    mockUseFindManyRecords(parameters);

    return findManyRecordsResult;
  },
}));

jest.mock(
  '@/page-layout/widgets/call-recording/hooks/useSelectedCallRecording',
  () => ({
    useSelectedCallRecording: () => selectedCallRecordingResult,
  }),
);

jest.mock('@/ui/layout/contexts/LayoutRenderingContext', () => ({
  useLayoutRenderingContext: () => mockLayoutRenderingContext,
}));

jest.mock('@/sse-db-event/hooks/useListenToEventsForQuery', () => ({
  useListenToEventsForQuery: (parameters: unknown) => {
    mockUseListenToEventsForQuery(parameters);
  },
}));

jest.mock(
  '@/browser-event/hooks/useListenToObjectRecordOperationBrowserEvent',
  () => ({
    useListenToObjectRecordOperationBrowserEvent: jest.fn(),
  }),
);

describe('useWidgetCallRecording', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLayoutRenderingContext.targetRecordIdentifier = {
      id: 'calendar-event-id',
      targetObjectNameSingular: 'calendarEvent',
    };
    findManyRecordsResult = {
      records: [],
      totalCount: 0,
      loading: false,
      error: undefined,
      refetch: jest.fn(),
    };
    selectedCallRecordingResult = {
      callRecording: { id: 'selected-call-recording-id' },
      loading: false,
      error: undefined,
      restriction: undefined,
      refetch: mockRefetchSelectedCallRecording,
    };
  });

  it('fetches only the count for the calendar event', () => {
    renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-transcript' }),
    );

    expect(mockUseFindManyRecords).toHaveBeenCalledWith({
      objectNameSingular: 'callRecording',
      filter: { calendarEventId: { eq: 'calendar-event-id' } },
      recordGqlFields: { id: true },
      limit: 1,
      withSoftDeleted: false,
      skip: false,
    });
  });

  it('counts the target itself and includes soft-deleted records on a call recording page', () => {
    mockLayoutRenderingContext.targetRecordIdentifier = {
      id: 'call-recording-id',
      targetObjectNameSingular: 'callRecording',
    };

    renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-summary' }),
    );

    expect(mockUseFindManyRecords).toHaveBeenCalledWith(
      expect.objectContaining({
        filter: { id: { eq: 'call-recording-id' } },
        withSoftDeleted: true,
        skip: false,
      }),
    );
  });

  it('uses totalCount instead of the fetched page length', () => {
    findManyRecordsResult.totalCount = 75;

    const { result } = renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-transcript' }),
    );

    expect(result.current.callRecordingsCount).toBe(75);
    expect(result.current.callRecording).toEqual({
      id: 'selected-call-recording-id',
    });
  });

  it('combines selected-record and count loading and errors', () => {
    selectedCallRecordingResult.loading = true;
    const countError = new Error('Count failed');
    findManyRecordsResult.error = countError;

    const { result } = renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-transcript' }),
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(countError);
  });

  it('refetches the selected record and count after SSE reconnects', async () => {
    renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-transcript' }),
    );

    const { onSseReconnected } = mockUseListenToEventsForQuery.mock
      .calls[0][0] as { onSseReconnected: () => Promise<void> };

    await act(async () => {
      await onSseReconnected();
    });

    expect(mockRefetchSelectedCallRecording).toHaveBeenCalledTimes(1);
    expect(findManyRecordsResult.refetch).toHaveBeenCalledTimes(1);
  });

  it('skips the count outside supported record pages', () => {
    mockLayoutRenderingContext.targetRecordIdentifier = {
      id: 'person-id',
      targetObjectNameSingular: 'person',
    };

    renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-transcript' }),
    );

    expect(mockUseFindManyRecords).toHaveBeenCalledWith(
      expect.objectContaining({ skip: true }),
    );
  });

  it('keeps the SSE query identity scoped to the widget query', () => {
    renderHook(() =>
      useWidgetCallRecording({ queryScope: 'call-recording-summary' }),
    );

    expect(mockUseListenToEventsForQuery).toHaveBeenCalledWith(
      expect.objectContaining({
        queryId: 'call-recording-summary-calendar-event-id',
      }),
    );
  });
});
