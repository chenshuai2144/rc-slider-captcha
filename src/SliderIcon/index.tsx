import React from 'react';
import BaseIcon, { SliderIconBaseProps } from './SliderIconBase';
import IconArrayRight from './IconArrowRight';
import IconCheck from './IconCheck';
import IconLoading from './IconLoading';
import IconRefresh from './IconRefresh';
import IconX from './IconX';
import './index.less';

const iconMap = {
  arrowRight: <IconArrayRight />,
  check: <IconCheck />,
  loading: <IconLoading />,
  refresh: <IconRefresh />,
  x: <IconX />,
};

export interface SliderIconProps extends SliderIconBaseProps {
  type: keyof typeof iconMap;
}

const SliderIcon: React.FC<SliderIconProps> = ({ type, ...restProps }) => {
  return <BaseIcon {...restProps}>{iconMap[type]}</BaseIcon>;
};

export default SliderIcon;