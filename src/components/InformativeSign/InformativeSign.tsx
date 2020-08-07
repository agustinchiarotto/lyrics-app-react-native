import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../CustomText';
import { MainContainer, Spacing } from './styles';

import { colors } from '../../utils/theme';

interface Props {
  variant: 'no-internet' | 'no-history' | 'not-found';
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
      text = 'No lyrics found.\n';
      break;
    case 'no-history':
      iconName = 'history';
      text = "You don't have prevoius searches.\nGo and find some lyrics!";
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
      <CustomText textAlign="center">{text}</CustomText>
    </MainContainer>
  );
};

export default InformativeSign;
