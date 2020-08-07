import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const Content = styled(View)({
  flex: 1,
});

export const Form = styled(View)({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
});

export const LastSearchContent = styled(View)({
  flex: 1,
  marginTop: 15,
  paddingHorizontal: 20,
});

export const MainContainer = styled(SafeAreaView)({
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

export const Separator = styled(View)({
  backgroundColor: colors.placeholderGray,
  height: 13,
  width: '100%',
});
