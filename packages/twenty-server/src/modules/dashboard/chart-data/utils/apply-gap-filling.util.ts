import { type ObjectRecordGroupByDateGranularity } from 'twenty-shared/types';
import {
  isFieldMetadataArrayKind,
  isFieldMetadataDateKind,
  isFieldMetadataSelectKind,
} from 'twenty-shared/utils';

import { type FlatFieldMetadata } from 'src/engine/metadata-modules/flat-field-metadata/types/flat-field-metadata.type';
import { type DateRangeBounds } from 'src/modules/dashboard/chart-data/types/date-range-bounds.type';
import { type GroupByRawResult } from 'src/modules/dashboard/chart-data/types/group-by-raw-result.type';
import {
  fillDateGaps,
  fillDateGapsTwoDimensional,
} from 'src/modules/dashboard/chart-data/utils/fill-date-gaps.util';
import {
  fillSelectGaps,
  fillSelectGapsTwoDimensional,
} from 'src/modules/dashboard/chart-data/utils/fill-select-gaps.util';
import { getSelectOptions } from 'src/modules/dashboard/chart-data/utils/get-select-options.util';

type ApplyGapFillingParams = {
  data: GroupByRawResult[];
  primaryAxisGroupByField: FlatFieldMetadata;
  dateGranularity: ObjectRecordGroupByDateGranularity | null | undefined;
  omitNullValues: boolean;
  isDescOrder: boolean;
  splitMultiValueFields?: boolean;
  dateRange?: DateRangeBounds;
  maximumNumberOfDateGroups: number;
} & (
  | { isTwoDimensional: false }
  | {
      isTwoDimensional: true;
      maximumNumberOfSecondDimensionValues: number;
      maximumNumberOfSegments?: number;
    }
);

type ApplyGapFillingResult = {
  data: GroupByRawResult[];
  wasTruncated: boolean;
};

export const applyGapFilling = (
  params: ApplyGapFillingParams,
): ApplyGapFillingResult => {
  const {
    data,
    primaryAxisGroupByField,
    dateGranularity,
    omitNullValues,
    isDescOrder,
    isTwoDimensional,
    splitMultiValueFields,
    dateRange,
    maximumNumberOfDateGroups,
  } = params;

  if (omitNullValues) {
    return { data, wasTruncated: false };
  }

  let currentData = data;
  let wasTruncated = false;

  const isPrimaryFieldDate = isFieldMetadataDateKind(
    primaryAxisGroupByField.type,
  );

  if (isPrimaryFieldDate) {
    const dateResult = params.isTwoDimensional
      ? fillDateGapsTwoDimensional({
          data: currentData,
          dateGranularity,
          isDescOrder,
          dateRange,
          maximumNumberOfDateGroups,
          maximumNumberOfSecondDimensionValues:
            params.maximumNumberOfSecondDimensionValues,
          maximumNumberOfSegments: params.maximumNumberOfSegments,
        })
      : fillDateGaps({
          data: currentData,
          dateGranularity,
          isDescOrder,
          dateRange,
          maximumNumberOfDateGroups,
        });

    currentData = dateResult.data;
    wasTruncated = dateResult.wasTruncated;
  }

  const isArrayFieldWithoutSplit =
    isFieldMetadataArrayKind(primaryAxisGroupByField.type) &&
    !(splitMultiValueFields ?? true);

  const isPrimaryFieldSelect = isFieldMetadataSelectKind(
    primaryAxisGroupByField.type,
  );

  if (isPrimaryFieldSelect && !isArrayFieldWithoutSplit) {
    const selectOptions = getSelectOptions(primaryAxisGroupByField);

    const fillSelectGapsFn = isTwoDimensional
      ? fillSelectGapsTwoDimensional
      : fillSelectGaps;

    currentData = fillSelectGapsFn({
      data: currentData,
      selectOptions,
    });
  }

  return { data: currentData, wasTruncated };
};
