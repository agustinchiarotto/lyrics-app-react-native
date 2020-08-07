import React from 'react';
import { ActivityIndicator } from 'react-native';

import CustomText from '../CustomText';
import { MainContainer } from './styles';
import { colors } from '../../utils/theme';
import AnimatedSqueeze from '../AnimatedSqueeze';

interface Props {
  disabled: boolean;
  loading: boolean;
  onPress: () => void;
  title: string;
  variant: 'blue' | 'orange';
}

const RectangularButton = ({ disabled, loading, onPress, title, variant }: Props) => {
  return (
    <AnimatedSqueeze disabled={disabled} onPress={onPress}>
      <MainContainer disabled={disabled} variant={variant}>
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <CustomText color={colors.white}>{title}</CustomText>
        )}
      </MainContainer>
    </AnimatedSqueeze>
  );
};

RectangularButton.defaultProps = {
  disabled: false,
  loading: false,
  variant: 'blue',
};

export default RectangularButton;
