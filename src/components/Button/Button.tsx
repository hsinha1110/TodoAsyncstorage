import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
