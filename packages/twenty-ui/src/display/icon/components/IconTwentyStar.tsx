import { useTheme } from '@emotion/react';

import IconTwentyStarRaw from '@ui/display/icon/assets/twenty-star.svg?react';
import { IconComponentProps } from '@ui/display/icon/types/IconComponent';

type IconTwentyStarProps = Pick<
  IconComponentProps,
  'size' | 'stroke' | 'color' | 'fill'
>;

export const IconTwentyStar = (props: IconTwentyStarProps) => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const stroke = props.stroke ?? theme.icon.stroke.md;
  const color = props.color ?? theme.IllustrationIcon.color.blue;
  const fill = props.fill ?? theme.IllustrationIcon.fill.blue;

  return (
    <IconTwentyStarRaw
      height={size}
      width={size}
      strokeWidth={stroke}
      color={color}
      fill={fill}
    />
  );
};
