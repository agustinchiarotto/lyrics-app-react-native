import * as React from 'react';

import { StyledText } from './styles';
import { colors } from '../../utils/theme';

// TYPES
type VariantType = 'error' | 'regular' | 'subtitle' | 'title';

interface Props {
  children: React.ReactNode;
  textAlign: 'center' | 'justify' | 'left' | 'right';
  variant?: VariantType;
}

const getTextPropsByVariant = (variant: VariantType = 'regular') => {
  let bold: boolean;
  let color: string;
  let size: number;

  switch (variant) {
    case 'error':
      bold = false;
      color = colors.error;
      size = 16;
      break;
    case 'subtitle':
      bold = false;
      color = colors.patagonianBlue;
      size = 16;
      break;
    case 'title':
      bold = true;
      color = colors.patagonianDarkBlue;
      size = 22;
      break;
    case 'regular':
      bold = true;
      color = colors.patagonianDarkBlue;
      size = 16;
      break;
    default:
      bold = false;
      color = colors.patagonianDarkBlue;
      size = 16;
  }

  return { bold, color, size };
};

const CustomText = ({ children, textAlign, variant }: Props) => {
  const { bold, color, size } = getTextPropsByVariant(variant);

  return (
    <StyledText
      allowFontScaling={false}
      bold={bold}
      color={color}
      size={size}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};

CustomText.defaultProps = {
  textAlign: 'left',
  variant: 'regular',
};

export default CustomText;
