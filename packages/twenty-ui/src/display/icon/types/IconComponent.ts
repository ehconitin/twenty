import { FunctionComponent } from 'react';

export type IconComponentProps = {
  className?: string;
  color?: string;
  size?: number;
  stroke?: number;
  fill?: string;
};

export type IconComponent = FunctionComponent<IconComponentProps>;
