import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from './theme';

export default function AppButton({ title, onPress, variant = 'primary', style }) {
  const variantStyle = variantStyles[variant];

  return (
    <TouchableOpacity
      style={[styles.button, variantStyle.button, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, variantStyle.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

const variantStyles = {
  primary: {
    button: { backgroundColor: COLORS.primary },
    text: { color: '#fff' },
  },
  secondary: {
    button: { backgroundColor: COLORS.neutral },
    text: { color: COLORS.text },
  },
  danger: {
    button: { backgroundColor: COLORS.danger },
    text: { color: '#fff' },
  },
};