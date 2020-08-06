import { SafeAreaView, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const DataContainer = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  height: 30,
  paddingHorizontal: 20,
  width: '100%',
});

export const LyricsContainer = styled(ScrollView)({
  flex: 1,
  paddingVertical: 20,
  paddingHorizontal: 20,
  width: '100%',
});

export const MainContainer = styled(SafeAreaView)({
  backgroundColor: colors.white,
  flex: 1,
  width: '100%',
});

export const Spacing = styled(View)({
  height: 15,
});
