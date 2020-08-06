import { View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const MainContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.white,
  height: 300,
  justifyContent: 'center',
  width: '90%',
});

export const Spacing = styled(View)({
  height: 30,
});
