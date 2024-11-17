import styled from '@emotion/styled';

const StyledRectangleIllustrationIcon = styled('div')`
  background-color: ${({ theme }) => theme.background.primary};
  border: 0.75px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  justify-content: center;
  height: 23px;
  width: 23px;
  align-items: center;
`;

export const IllustrationIconWrapper = StyledRectangleIllustrationIcon;
