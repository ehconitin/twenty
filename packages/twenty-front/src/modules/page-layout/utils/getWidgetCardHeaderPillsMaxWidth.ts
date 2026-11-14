import { WIDGET_CARD_HEADER_PILLS_MAX_WIDTH_RATIO } from '@/page-layout/constants/WidgetCardHeaderPillsMaxWidthRatio';

export const getWidgetCardHeaderPillsMaxWidth = ({
  headerWidth,
  titleWidth,
  titleNaturalWidth,
  pillsWidth,
}: {
  headerWidth: number;
  titleWidth: number;
  titleNaturalWidth: number;
  pillsWidth: number;
}) =>
  Math.max(
    headerWidth * WIDGET_CARD_HEADER_PILLS_MAX_WIDTH_RATIO,
    titleWidth + pillsWidth - titleNaturalWidth,
  );
