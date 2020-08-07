import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

export const IconContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.patagonianBlueOpacity,
  borderRadius: 30,
  height: 60,
  justifyContent: 'center',
  width: 60,
});

export const Info = styled(View)({
  alignSelf: 'center',
  flex: 1,
  marginLeft: 3,
});

export const Titles = styled(View)({
  alignSelf: 'center',
  marginLeft: 20,
});

export const additionalStyles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    width: '95%',
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
