import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../CustomText';
import { MainContainer, Spacing } from './styles';

import { colors } from '../../utils/theme';

const NoInternetSign = () => (
  <MainContainer>
    <MaterialIcon name="cloud-off" size={100} color={colors.patagonianBlue} />
    <Spacing />
    <CustomText textAlign="center" variant="subtitle">
      {'Search is not available without internet.\nPlease check your conection.'}
    </CustomText>
  </MainContainer>
);

export default NoInternetSign;
