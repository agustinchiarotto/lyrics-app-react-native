import React from 'react';

import CustomText from '../CustomText';
import { MainContainer } from './styles';
import { colors } from '../../utils/theme';

interface Props {
  disabled: boolean;
  onPress: () => void;
  title: string;
  variant: 'blue' | 'orange';
}

const RectangularButton = ({ disabled, onPress, title, variant }: Props) => {
  return (
    <MainContainer disabled={disabled} onPress={onPress} variant={variant}>
      <CustomText color={colors.white}>{title}</CustomText>
    </MainContainer>
  );
};

RectangularButton.defaultProps = {
  disabled: false,
};

export default RectangularButton;
