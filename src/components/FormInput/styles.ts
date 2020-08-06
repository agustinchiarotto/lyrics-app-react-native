// REACT NATIVE
import { TextInput, TextInputProperties, View } from 'react-native';

// STYLED
import styled from 'styled-components';
import { colors } from '../../utils/theme';
import { isIos } from '../../utils/platform';

export const ErrorTextContainer = styled(View)({
  alignItems: 'flex-end',
  marginTop: 5,
  width: '100%',
});

export const FieldContainer = styled(View)({
  width: '100%',
});

type InputProps = {
  active: boolean;
} & TextInputProperties;

export const Input = styled(TextInput)((props: InputProps) => ({
  color: colors.patagonianDarkBlue,
  flex: 1,
  fontSize: 13,
  opacity: props.active ? 1 : 0.8,
  paddingVertical: 0,
  paddingTop: isIos ? 0 : 7,
}));

export const InputContainer = styled(View)({
  alignItems: 'center',
  backgroundColor: colors.lightGray,
  borderRadius: 10,
  borderWidth: 1,
  flexDirection: 'row',
  height: 50,
  justifyContent: 'center',
  marginTop: 10,
  paddingHorizontal: 20,
  width: '100%',
});
