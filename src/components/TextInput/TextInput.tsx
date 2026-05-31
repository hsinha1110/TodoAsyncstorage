import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {}

const Input: FC<InputProps> = props => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default Input;
