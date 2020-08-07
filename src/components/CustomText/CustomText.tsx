import * as React from 'react';

import { StyledText } from './styles';
import { colors } from '../../utils/theme';

// TYPES
type VariantType = 'error' | 'regular' | 'subtitle' | 'title' | 'bigTitle';

interface Props {
  children: React.ReactNode;
  color: string;
  numberOfLines?: number;
  textAlign: 'center' | 'justify' | 'left' | 'right';
  variant?: VariantType;
}

const getTextPropsByVariant = (variant: VariantType = 'regular') => {
  let bold: boolean;
  let size: number;

  switch (variant) {
    case 'error':
      bold = false;
      size = 13;
      break;
    case 'subtitle':
      bold = true;
      size = 18;
      break;
    case 'title':
      bold = true;
      size = 22;
      break;
    case 'bigTitle':
      bold = true;
      size = 26;
      break;
    case 'regular':
      bold = false;
      size = 16;
      break;
    default:
      bold = false;
      size = 16;
  }

  return { bold, size };
};

const CustomText = ({ children, color, numberOfLines, textAlign, variant }: Props) => {
  const { bold, size } = getTextPropsByVariant(variant);

  return (
    <StyledText
      allowFontScaling={false}
      bold={bold}
      color={color}
      numberOfLines={numberOfLines}
      size={size}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};

CustomText.defaultProps = {
  color: colors.patagonianDarkBlue,
  textAlign: 'left',
  variant: 'regular',
};

export default CustomText;
