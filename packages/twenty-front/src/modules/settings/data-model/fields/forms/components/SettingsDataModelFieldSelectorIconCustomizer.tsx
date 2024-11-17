import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconComponent, IllustrationIconWrapper } from 'twenty-ui';

type SettingsDataModelFieldSelectorIconCustomizerProps = {
  Icon: IconComponent;
  rotate?: number;
  fill?: boolean;
};

const StyledIconCustomizer = styled.div<{ rotate: number }>`
  align-items: center;

  display: flex;
  justify-content: center;
  background-color: transparent;
  & > svg {
    transform: rotate(${({ rotate }) => rotate}deg);
  }
`;

export const SettingsDataModelFieldSelectorIconCustomizer = ({
  Icon,
  rotate = -4,
  fill = true,
}: SettingsDataModelFieldSelectorIconCustomizerProps) => {
  const theme = useTheme();
  return (
    <IllustrationIconWrapper>
      <StyledIconCustomizer rotate={rotate}>
        <Icon
          size={18}
          color={theme.IllustrationIcon.color.blue}
          fill={fill ? theme.IllustrationIcon.fill.blue : 'transparent'}
        />
      </StyledIconCustomizer>
    </IllustrationIconWrapper>
  );
};
