import { SafeAreaView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const ClearButtonContainer = styled(View)({
  alignItems: 'center',
  marginVertical: 10,
  width: '100%',
});

export const EmptyListPlaceholder = styled(View)({
  alignItems: 'center',
  width: '100%',
});

export const MainContainer = styled(SafeAreaView)({
  backgroundColor: colors.white,
  flex: 1,
  width: '100%',
});

export const additionalStyles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  flatlistContent: {
    paddingVertical: 20,
  },
});
