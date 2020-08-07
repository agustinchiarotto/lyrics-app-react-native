import { View } from 'react-native';
import styled from 'styled-components';

export const Space = styled(View)(
  ({ isHorizontal, size }: { isHorizontal: boolean; size: number }) => ({
    height: !isHorizontal ? size : 'auto',
    width: isHorizontal ? size : 'auto',
  }),
);
