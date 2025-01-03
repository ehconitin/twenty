import { useRefetchAggregateQueries } from '@/object-record/hooks/useRefetchAggregateQueries';
import { getAggregateQueryName } from '@/object-record/utils/getAggregateQueryName';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { useApolloClient } from '@apollo/client';
import { renderHook } from '@testing-library/react';

jest.mock('@apollo/client', () => ({
  useApolloClient: jest.fn(),
}));

jest.mock('@/workspace/hooks/useIsFeatureEnabled', () => ({
  useIsFeatureEnabled: jest.fn(),
}));

jest.mock('~/generated/graphql', () => ({
  FeatureFlagKey: {
    IsAggregateQueryEnabled: 'IsAggregateQueryEnabled',
  },
}));

describe('useRefetchAggregateQueries', () => {
  const mockRefetchQueries = jest.fn();
  const mockApolloClient = {
    refetchQueries: mockRefetchQueries,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useApolloClient as jest.Mock).mockReturnValue(mockApolloClient);
  });

  it('should refetch queries when feature flag is enabled', async () => {
    // Arrange
    (useIsFeatureEnabled as jest.Mock).mockReturnValue(true);
    const objectMetadataNamePlural = 'opportunities';
    const expectedQueryName = getAggregateQueryName(objectMetadataNamePlural);

    // Act
    const { result } = renderHook(() =>
      useRefetchAggregateQueries({ objectMetadataNamePlural }),
    );
    await result.current.refetchAggregateQueries();

    // Assert
    expect(mockRefetchQueries).toHaveBeenCalledTimes(1);
    expect(mockRefetchQueries).toHaveBeenCalledWith({
      include: [expectedQueryName],
    });
  });

  it('should not refetch queries when feature flag is disabled', async () => {
    // Arrange
    (useIsFeatureEnabled as jest.Mock).mockReturnValue(false);
    const objectMetadataNamePlural = 'opportunities';

    // Act
    const { result } = renderHook(() =>
      useRefetchAggregateQueries({ objectMetadataNamePlural }),
    );
    await result.current.refetchAggregateQueries();

    // Assert
    expect(mockRefetchQueries).not.toHaveBeenCalled();
  });

  it('should handle errors during refetch', async () => {
    // Arrange
    (useIsFeatureEnabled as jest.Mock).mockReturnValue(true);
    const error = new Error('Refetch failed');
    mockRefetchQueries.mockRejectedValue(error);
    const objectMetadataNamePlural = 'opportunities';

    // Act
    const { result } = renderHook(() =>
      useRefetchAggregateQueries({ objectMetadataNamePlural }),
    );

    // Assert
    await expect(result.current.refetchAggregateQueries()).rejects.toThrow(
      'Refetch failed',
    );
  });
});
