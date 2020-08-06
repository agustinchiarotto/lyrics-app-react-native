import React from 'react';
import { Pressable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CustomText from '../CustomText';
import { patagonianLogo } from '../../assets/images';

import { BalanceFillingView, Logo, MainContainer, additionalStyles } from './styles';

import { colors } from '../../utils/theme';

interface Props {
  onPressBackButton?: () => void;
  showBackButton?: boolean;
  title: string;
}

const Header = ({ onPressBackButton, showBackButton, title }: Props) => {
  return (
    <MainContainer style={additionalStyles.headerShadow}>
      {showBackButton ? (
        <Pressable onPress={onPressBackButton}>
          <MaterialIcon name="keyboard-arrow-left" size={35} color={colors.patagonianDarkBlue} />
        </Pressable>
      ) : (
        <BalanceFillingView />
      )}
      <CustomText variant="title">{title}</CustomText>
      <Logo source={patagonianLogo} />
    </MainContainer>
  );
};

Header.defaultProps = {
  onPressBackButton: () => {},
  showBackButton: false,
};

export default Header;
