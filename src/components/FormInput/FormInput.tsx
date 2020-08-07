import React from 'react';
import { TextInputProps } from 'react-native';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import CustomText from '../CustomText';

import { ErrorTextContainer, FieldContainer, Input, InputContainer } from './styles';
import { colors } from '../../utils/theme';

interface TextFieldCustomProps {
  label: string;
  placeholder: string;
}

type ReduxFormPropsToPick = 'validate';

type PickedReduxFormProps = Pick<BaseFieldProps, ReduxFormPropsToPick>;

export type TextInputFieldProps = WrappedFieldProps &
  TextInputProps &
  TextFieldCustomProps &
  PickedReduxFormProps;

const FormInput = ({ input, label, meta, ...inputProps }: TextInputFieldProps) => {
  const getBorder = () => {
    let borderColor: string;
    if (meta.error && meta.touched) {
      borderColor = colors.error;
    } else if (meta.active) {
      borderColor = colors.patagonianBlue;
    } else {
      borderColor = colors.placeholderGray;
    }

    return borderColor;
  };

  console.log('meta: ', meta);
  console.log('input: ', input);

  return (
    <FieldContainer>
      <CustomText variant="subtitle">{label}</CustomText>
      {console.log('Hola')}
      <InputContainer
        style={{
          borderColor: getBorder(),
        }}
      >
        <Input
          {...inputProps}
          // onBlur={input.onBlur}
          onChangeText={input.onChange}
          // onChangeText={() => input.onChange('dasajk')}
          onEndEditing={input.onBlur}
          // onChangeText={(text) => console.log('change text', text)}
          // onEndEditing={(event) => console.log('end editing', event)}
          onFocus={(e: any) => input.onFocus(e)}
          active={meta.active || false}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.patagonianGray}
          // value={input.value}
        />
      </InputContainer>
      {meta.touched && meta.error ? (
        <ErrorTextContainer>
          <CustomText variant="error">{meta.error}</CustomText>
        </ErrorTextContainer>
      ) : null}
    </FieldContainer>
  );
};

export default FormInput;
