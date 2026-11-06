import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import { COLORS, COURSES } from '../theme';
import { calculateStatistics } from '../helpers';

export default function StatisticsScreen({ goToView, menuItems }) {
  const { total, average, perCourse } = calculateStatistics(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Statistics</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total menu items</Text>
        <Text style={styles.value}>{total}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Average price</Text>
        <Text style={styles.value}>R{average.toFixed(2)}</Text>
      </View>

      <Text style={styles.sectionTitle}>Items per course</Text>
      {COURSES.map((courseName) => (
        <View key={courseName} style={styles.card}>
          <Text style={styles.label}>{courseName}</Text>
          <Text style={styles.value}>{perCourse[courseName]}</Text>
        </View>
      ))}

      <AppButton title="Back to Menu Items" onPress={goToView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: COLORS.text,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  label: { fontSize: 16, color: COLORS.text },
  value: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
});