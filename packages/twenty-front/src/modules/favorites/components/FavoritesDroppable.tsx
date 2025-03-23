import styled from '@emotion/styled';
import { Droppable } from '@hello-pangea/dnd';

type FavoritesDroppableProps = {
  droppableId: string;
  children: React.ReactNode;
  isDragIndicatorVisible?: boolean;
  showDropLine?: boolean;
  isLastDroppable?: boolean;
};

const StyledDroppableWrapper = styled.div<{
  isDraggingOver: boolean;
  isDragIndicatorVisible: boolean;
  showDropLine: boolean;
  isLastDroppable: boolean;
}>`
  position: relative;
  transition: all 150ms ease-in-out;
  width: 100%;

  ${({ isDraggingOver, isDragIndicatorVisible, showDropLine, theme }) =>
    isDraggingOver &&
    isDragIndicatorVisible &&
    `
      background-color: ${theme.background.transparent.blue};
      
      ${
        showDropLine &&
        `
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${theme.color.blue};
          border-radius: ${theme.border.radius.sm} ${theme.border.radius.sm} 0 0;
        }
      `
      }
    `}

  &::after {
    content: '';
    position: absolute;
    bottom: ${({ isLastDroppable }) => (isLastDroppable ? '-12px' : '0')};
    left: 0;
    width: 100%;
    height: ${({ isLastDroppable }) => (isLastDroppable ? '24px' : '12px')};
    pointer-events: none;
    opacity: 0;
  }
`;

const StyledInnerDroppable = styled.div<{
  isDraggingOver: boolean;
}>`
  position: relative;
  width: 100%;

  ${({ isDraggingOver }) =>
    isDraggingOver &&
    `
      &::after {
        content: '';
        position: absolute;
        bottom: -12px;
        left: 0;
        width: 100%;
        height: 24px;
        z-index: 1;
      }
    `}
`;

export const FavoritesDroppable = ({
  droppableId,
  children,
  isDragIndicatorVisible = true,
  showDropLine = true,
  isLastDroppable = false,
}: FavoritesDroppableProps) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <StyledDroppableWrapper
          isDraggingOver={snapshot.isDraggingOver}
          isDragIndicatorVisible={isDragIndicatorVisible}
          showDropLine={showDropLine}
          isLastDroppable={isLastDroppable}
        >
          <StyledInnerDroppable
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </StyledInnerDroppable>
        </StyledDroppableWrapper>
      )}
    </Droppable>
  );
};
