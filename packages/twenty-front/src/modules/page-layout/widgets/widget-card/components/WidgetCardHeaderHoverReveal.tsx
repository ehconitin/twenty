import { widgetCardHoveredComponentFamilyState } from '@/page-layout/widgets/states/widgetCardHoveredComponentFamilyState';
import { WidgetComponentInstanceContext } from '@/page-layout/widgets/states/contexts/WidgetComponentInstanceContext';
import { useComponentInstanceStateContext } from '@/ui/utilities/state/component-state/hooks/useComponentInstanceStateContext';
import { useIsMobile, useIsTouchDevice } from 'twenty-ui/utilities';
import { useAtomComponentFamilyStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomComponentFamilyStateValue';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { themeCssVariables } from 'twenty-ui/theme';

const StyledHoverReveal = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity ${themeCssVariables.animation.duration.instant}s ease;

  &:focus-within {
    opacity: 1;
    pointer-events: auto;
  }
`;

type WidgetCardHeaderHoverRevealProps = {
  children: ReactNode;
  isHoverOnly?: boolean;
};

// Without hover (touch devices, mobile) the content stays visible
export const WidgetCardHeaderHoverReveal = ({
  children,
  isHoverOnly = false,
}: WidgetCardHeaderHoverRevealProps) => {
  const widgetComponentInstanceId = useComponentInstanceStateContext(
    WidgetComponentInstanceContext,
  );
  const isMobile = useIsMobile();
  const isTouchDevice = useIsTouchDevice();

  const widgetCardHovered = useAtomComponentFamilyStateValue(
    widgetCardHoveredComponentFamilyState,
    widgetComponentInstanceId?.instanceId ?? '',
  );

  return (
    <StyledHoverReveal
      isVisible={
        (!isHoverOnly && (isTouchDevice || isMobile)) || widgetCardHovered
      }
    >
      {children}
    </StyledHoverReveal>
  );
};
