import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';
import { WINDOW_HEIGHT } from '../../utils/platform';

export const Content = styled(ScrollView)({
  flex: 1,
});

export const Form = styled(View)({
  alignItems: 'center',
  height: WINDOW_HEIGHT * 0.4,
  justifyContent: 'center',
  paddingHorizontal: 20,
});

export const LastSearchContent = styled(View)({
  height: WINDOW_HEIGHT * 0.4,
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

export const additionalStyles = StyleSheet.create({
  scroll: {
    paddingBottom: 20,
  },
});
