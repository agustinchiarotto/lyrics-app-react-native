import { SafeAreaView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const MainContainer = styled(SafeAreaView)({
  backgroundColor: colors.white,
  flex: 1,
  width: '100%',
});

export const Spacing = styled(View)({
  height: 15,
});

export const additionalStyles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  flatlistContent: {
    paddingVertical: 10,
  },
});
