import { Pressable } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../utils/theme';

interface ButtonProps {
  disabled: boolean;
  variant: 'blue' | 'orange';
}

export const MainContainer = styled(Pressable)(({ disabled, variant }: ButtonProps) => ({
  alignItems: 'center',
  backgroundColor: disabled
    ? colors.patagonianOrangeOpacity
    : variant === 'orange'
    ? colors.patagonianOrange
    : colors.patagonianBlue,
  borderRadius: 10,
  height: 50,
  justifyContent: 'center',
  width: 250,
}));
