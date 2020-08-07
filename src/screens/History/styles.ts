import { SafeAreaView, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const ClearButtonContainer = styled(View)({
  alignItems: 'center',
  marginBottom: 10,
  marginTop: 20,
  width: '100%',
});

export const EmptyListPlaceholder = styled(View)({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
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
    flexGrow: 1,
    paddingVertical: 20,
  },
});
