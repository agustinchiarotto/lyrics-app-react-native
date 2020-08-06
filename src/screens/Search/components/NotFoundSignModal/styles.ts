import { View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../../../utils/theme';

export const MainContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.blackOpacity03,
  flex: 1,
  justifyContent: 'center',
  width: '100%',
});

export const NotFoundSignContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: 15,
  justifyContent: 'center',
  paddingHorizontal: 20,
  paddingBottom: 20,
  width: '80%',
});
