import React from 'react';
import { Space } from './styles';

const Spacing = ({ isHorizontal, size }: { isHorizontal: boolean; size: number }) => {
  return <Space isHorizontal={isHorizontal} size={size} />;
};

Spacing.defaultProps = {
  size: 20,
  isHorizontal: false,
};

export default Spacing;
