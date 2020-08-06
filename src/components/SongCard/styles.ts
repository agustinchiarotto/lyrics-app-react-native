import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const MainContainer = styled(View)({
  alignSelf: 'center',
  backgroundColor: colors.white,
  borderRadius: 10,
  height: 70,
  justifyContent: 'center',
  paddingHorizontal: 15,
  width: '95%',
});

export const additionalStyles = StyleSheet.create({
  cardShadow: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
