import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import { COLORS } from './theme';

export default function MenuItemCard({ item, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.detail}>
        {item.course} • R{item.price}
      </Text>

      <View style={styles.actions}>
        <AppButton
          title="Edit"
          variant="secondary"
          onPress={() => onEdit(item)}
          style={styles.actionButton}
        />
        <AppButton
          title="Delete"
          variant="danger"
          onPress={() => onDelete(item)}
          style={styles.actionButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  description: {
    fontSize: 14,
    color: COLORS.mutedText,
    marginTop: 4,
  },
  detail: {
    fontSize: 14,
    color: COLORS.primary,
    marginTop: 6,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
  },
});