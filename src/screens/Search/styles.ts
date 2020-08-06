import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const MainContainer = styled(SafeAreaView)({
  alignItems: 'center',
  backgroundColor: colors.white,
  flex: 1,
  width: '100%',
});

export const NoInternetSignContainer = styled(View)({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});
