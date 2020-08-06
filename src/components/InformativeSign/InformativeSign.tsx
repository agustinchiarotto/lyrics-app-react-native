import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../CustomText';
import { MainContainer, Spacing } from './styles';

import { colors } from '../../utils/theme';

interface Props {
  variant: 'no-internet' | 'not-found';
}

function getIconAndTextByVariant(variant: Props['variant']) {
  let iconName: string;
  let text: string;

  switch (variant) {
    case 'no-internet':
      iconName = 'cloud-off';
      text = 'Search is not available without internet.\nPlease check your conection.';
      break;
    case 'not-found':
      iconName = 'sentiment-dissatisfied';
      text = 'No lyrics found.\nPlease make sure you typed the full\nname of the artist and song.';
      break;
    default:
      iconName = 'info-outline';
      text = '';
      break;
  }

  return { iconName, text };
}

const InformativeSign = ({ variant }: Props) => {
  const { iconName, text } = getIconAndTextByVariant(variant);
  return (
    <MainContainer>
      <MaterialIcon name={iconName} size={100} color={colors.patagonianBlue} />
      <Spacing />
      <CustomText textAlign="center" variant="subtitle">
        {text}
      </CustomText>
    </MainContainer>
  );
};

export default InformativeSign;
