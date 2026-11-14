import { type WidgetDashboardFilterHeaderContent } from '@/page-layout/types/WidgetDashboardFilterHeaderContent';
import { WidgetCardHeaderHoverReveal } from '@/page-layout/widgets/widget-card/components/WidgetCardHeaderHoverReveal';
import { TooltipDelay } from '@/ui/layout/tooltip/constants/TooltipDelay';
import { styled } from '@linaria/react';
import { isDefined } from 'twenty-shared/utils';
import { IconCalendarEvent, IconFilter, IconFilterOff } from 'twenty-ui/icon';
import { Status } from 'twenty-ui/primitives/data-display';
import { Tooltip } from 'twenty-ui/primitives/surfaces';
import { themeCssVariables, useTheme } from 'twenty-ui/theme';
import { useIsTouchDevice } from 'twenty-ui/utilities';

// Same tokens as the "Not shared" pill this header shows for a forbidden widget
const StyledPill = styled.div`
  align-items: center;
  background: ${themeCssVariables.background.transparent.light};
  border-radius: ${themeCssVariables.border.radius.md};
  color: ${themeCssVariables.font.color.tertiary};
  display: flex;
  font-size: ${themeCssVariables.font.size.md};
  gap: ${themeCssVariables.spacing[1]};
  height: ${themeCssVariables.spacing[5]};
  line-height: ${themeCssVariables.text.lineHeight.md};
  min-width: 0;
  padding: 0 ${themeCssVariables.spacing[1]};
  user-select: none;
  white-space: nowrap;

  > svg {
    flex-shrink: 0;
  }
`;

const StyledFieldLabel = styled.div`
  align-items: center;
  color: ${themeCssVariables.font.color.tertiary};
  display: flex;
  font-size: ${themeCssVariables.font.size.sm};
  gap: ${themeCssVariables.spacing[1]};
  min-width: 0;
  white-space: nowrap;

  > svg {
    flex-shrink: 0;
  }
`;

const StyledText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledStatusContainer = styled.div`
  display: flex;
  min-width: 0;
`;

const StyledHoverIndicator = styled.span`
  border-radius: ${themeCssVariables.border.radius.xs};
  color: ${themeCssVariables.font.color.tertiary};
  display: flex;

  &:focus-visible {
    outline: 2px solid ${themeCssVariables.color.blue};
    outline-offset: 1px;
  }
`;

type WidgetDashboardFilterHeaderItemsProps = {
  content: WidgetDashboardFilterHeaderContent;
};

export const WidgetDashboardFilterHeaderItems = ({
  content: { fieldLabels, pills, hoverIndicatorText },
}: WidgetDashboardFilterHeaderItemsProps) => {
  const theme = useTheme();
  const isTouchDevice = useIsTouchDevice();

  return (
    <>
      {fieldLabels.map(({ pageLayoutFilterId, kind, text, fullText }) => {
        const Icon = kind === 'APPLIED' ? IconCalendarEvent : IconFilterOff;

        return (
          <Tooltip
            key={pageLayoutFilterId}
            content={fullText}
            delay={TooltipDelay.mediumDelay}
          >
            <StyledFieldLabel>
              <Icon size={theme.icon.size.sm} />
              <StyledText>{text}</StyledText>
            </StyledFieldLabel>
          </Tooltip>
        );
      })}
      {pills.map(({ pageLayoutFilterId, kind, text, tooltip }) => {
        const Icon = kind === 'OVERLAP' ? IconFilter : IconFilterOff;

        return (
          <Tooltip
            key={pageLayoutFilterId}
            content={tooltip}
            delay={TooltipDelay.mediumDelay}
          >
            {kind === 'UNAVAILABLE' ? (
              <StyledStatusContainer>
                <Status color="orange">
                  <StyledText>{text}</StyledText>
                </Status>
              </StyledStatusContainer>
            ) : (
              <StyledPill>
                <Icon size={theme.icon.size.sm} />
                <StyledText>{text}</StyledText>
              </StyledPill>
            )}
          </Tooltip>
        );
      })}
      {isDefined(hoverIndicatorText) && (
        <WidgetCardHeaderHoverReveal isAlwaysVisible={isTouchDevice}>
          <Tooltip
            content={hoverIndicatorText}
            delay={TooltipDelay.mediumDelay}
          >
            <StyledHoverIndicator
              role="img"
              tabIndex={0}
              aria-label={hoverIndicatorText}
            >
              <IconCalendarEvent size={theme.icon.size.sm} />
            </StyledHoverIndicator>
          </Tooltip>
        </WidgetCardHeaderHoverReveal>
      )}
    </>
  );
};
