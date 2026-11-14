import { useNumberFormat } from '@/localization/hooks/useNumberFormat';
import { WidgetCardHeaderHoverReveal } from '@/page-layout/widgets/widget-card/components/WidgetCardHeaderHoverReveal';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { IconButton } from 'twenty-ui/components/input';
import { OverflowingTextWithTooltip } from 'twenty-ui/primitives/typography';
import { IconTrash } from 'twenty-ui/icon';

import { type WidgetCardVariant } from '@/page-layout/widgets/types/WidgetCardVariant';
import { WidgetGrip } from '@/page-layout/widgets/widget-card/components/WidgetGrip';
import { AnimatePresence, motion } from 'framer-motion';
import { isDefined } from 'twenty-shared/utils';
import { useTheme, themeCssVariables } from 'twenty-ui/theme';
import { useLingui } from '@lingui/react/macro';

export type WidgetCardHeaderProps = {
  variant: WidgetCardVariant;
  isInEditMode: boolean;
  isEmpty?: boolean;
  isHovered?: boolean;
  count?: number | null;
  actions?: ReactNode;
  title: string;
  onRemove?: (e?: React.MouseEvent) => void;
  forbiddenDisplay?: ReactNode;
  headerPills?: ReactNode;
  className?: string;
  isResizing?: boolean;
};

const StyledWidgetCardHeader = styled.div<{ shouldInset: boolean }>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: ${({ shouldInset }) =>
    shouldInset
      ? `calc(${themeCssVariables.spacing[6]} + var(--widget-card-title-padding-top))`
      : themeCssVariables.spacing[6]};
  padding: ${({ shouldInset }) =>
    shouldInset
      ? `var(--widget-card-title-padding-top) var(--widget-card-padding-inline) 0`
      : '0'};
`;

const StyledTitleContainer = styled.div`
  align-items: center;
  color: ${themeCssVariables.font.color.primary};
  display: flex;
  flex: 1;
  font-size: ${themeCssVariables.font.size.md};
  font-weight: ${themeCssVariables.font.weight.medium};
  gap: ${themeCssVariables.spacing[1]};
  overflow: hidden;
  user-select: none;
`;

const StyledCount = styled.span`
  color: ${themeCssVariables.font.color.light};
  flex-shrink: 0;
  font-weight: ${themeCssVariables.font.weight.regular};
`;

// The max width leaves the title some room before both truncate; the padding keeps focus rings inside the clip
const StyledHeaderPillsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${themeCssVariables.spacing[1]};
  margin: calc(-1 * ${themeCssVariables.spacing[1]});
  max-width: calc(100% - min(${themeCssVariables.spacing[20]}, 40%));
  min-width: 0;
  overflow: hidden;
  padding: ${themeCssVariables.spacing[1]};
`;

const StyledRightContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${themeCssVariables.spacing[0.5]};
`;

const StyledIconButtonContainerBase = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
const StyledIconButtonContainer = motion.create(StyledIconButtonContainerBase);

export const WidgetCardHeader = ({
  variant,
  isEmpty = false,
  isInEditMode = false,
  isHovered = false,
  count,
  actions,
  isResizing = false,
  title,
  onRemove,
  forbiddenDisplay,
  headerPills,
  className,
}: WidgetCardHeaderProps) => {
  const { t } = useLingui();
  const theme = useTheme();
  const { formatNumber } = useNumberFormat();

  const isRemoveButtonShown =
    !isResizing && !isEmpty && isInEditMode && isDefined(onRemove);

  const shouldInset = variant === 'flush';
  return (
    <StyledWidgetCardHeader className={className} shouldInset={shouldInset}>
      <AnimatePresence initial={false}>
        {!isEmpty && isInEditMode && <WidgetGrip className="drag-handle" />}
      </AnimatePresence>
      <StyledTitleContainer>
        <OverflowingTextWithTooltip text={isEmpty ? t`Add Widget` : title} />
        {isDefined(count) && <StyledCount>{formatNumber(count)}</StyledCount>}
      </StyledTitleContainer>
      {isDefined(headerPills) && (
        <StyledHeaderPillsContainer>{headerPills}</StyledHeaderPillsContainer>
      )}
      <StyledRightContainer>
        {actions}
        {isDefined(forbiddenDisplay) && forbiddenDisplay}
        {/* Keeps its slot, so the header pills do not move when it appears */}
        {isRemoveButtonShown && isDefined(headerPills) && (
          <WidgetCardHeaderHoverReveal isAlwaysVisible={false}>
            <IconButton
              aria-label={t`Remove widget`}
              onClick={onRemove}
              variant="ghost"
              size="sm"
            >
              <IconTrash />
            </IconButton>
          </WidgetCardHeaderHoverReveal>
        )}
        <AnimatePresence initial={false}>
          {isRemoveButtonShown && !isDefined(headerPills) && isHovered && (
            <StyledIconButtonContainer
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                duration: theme.animation.duration.fast,
                ease: 'easeInOut',
              }}
            >
              <IconButton
                aria-label={t`Remove widget`}
                onClick={onRemove}
                variant="ghost"
                size="sm"
              >
                <IconTrash />
              </IconButton>
            </StyledIconButtonContainer>
          )}
        </AnimatePresence>
      </StyledRightContainer>
    </StyledWidgetCardHeader>
  );
};
