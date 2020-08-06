import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';

export interface StyledTextProps extends TextProps {
  bold: boolean;
  color: string;
  textAlign: 'center' | 'justify' | 'left' | 'right';
  size: number;
}

type AvailableFontWeights = 'bold' | 'normal';

export const StyledText = styled(Text)((props: StyledTextProps) => ({
  color: props.color,
  fontSize: props.size,
  fontWeight: props.bold ? ('bold' as AvailableFontWeights) : ('normal' as AvailableFontWeights),
  textAlign: props.textAlign,
}));
