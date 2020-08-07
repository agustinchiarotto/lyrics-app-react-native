import React from 'react';
import { ActivityIndicator } from 'react-native';

import CustomText from '../CustomText';
import { MainContainer } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  disabled: boolean;
  loading: boolean;
  onPress: () => void;
  title: string;
  variant: 'blue' | 'orange';
}

const RectangularButton = ({ disabled, loading, onPress, title, variant }: Props) => {
  return (
    <MainContainer disabled={disabled} onPress={onPress} variant={variant}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <CustomText color={colors.white}>{title}</CustomText>
      )}
    </MainContainer>
  );
};

RectangularButton.defaultProps = {
  disabled: false,
  loading: false,
};

export default RectangularButton;
