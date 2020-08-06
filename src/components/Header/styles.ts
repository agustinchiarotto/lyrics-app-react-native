import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const BalanceFillingView = styled(View)({
  height: 35,
  width: 35,
});

export const Logo = styled(Image)({
  height: 35,
  width: 35,
});

export const MainContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.white,
  flexDirection: 'row',
  height: 50,
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  paddingVertical: 10,
  width: '100%',
});

export const additionalStyles = StyleSheet.create({
  headerShadow: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
