import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AppButton from '../AppButton';
import MenuItemCard from '../MenuItemCard';
import { COLORS, COURSES } from '../theme';
import { filterMenuItems } from '../helpers';

const COURSE_FILTERS = ['All', ...COURSES];

export default function ViewMenuItemsScreen({
  goToAdd,
  goToEdit,
  goToStats,
  deleteMenuItem,
  menuItems,
}) {
  const [searchText, setSearchText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');

  const visibleItems = filterMenuItems(menuItems, searchText, selectedCourse);
  const isFiltering = searchText.trim() !== '' || selectedCourse !== 'All';

  const clearFilters = () => {
    setSearchText('');
    setSelectedCourse('All');
  };

  const confirmDelete = (item) => {
    Alert.alert(
      'Delete Menu Item',
      `Are you sure you want to delete "${item.dishName}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteMenuItem(item.id),
        },
      ]
    );
  };

  const emptyMessage =
    menuItems.length === 0
      ? 'No menu items added yet.'
      : 'No menu items match your search or filter.';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items</Text>

      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search by dish name"
      />

      <View style={styles.filterRow}>
        {COURSE_FILTERS.map((courseName) => (
          <TouchableOpacity
            key={courseName}
            style={[
              styles.filterChip,
              selectedCourse === courseName && styles.filterChipActive,
            ]}
            onPress={() => setSelectedCourse(courseName)}
          >
            <Text
              style={[
                styles.filterChipText,
                selectedCourse === courseName && styles.filterChipTextActive,
              ]}
            >
              {courseName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {isFiltering && (
        <AppButton
          title="Clear Search and Filter"
          variant="secondary"
          onPress={clearFilters}
          style={styles.clearButton}
        />
      )}

      <FlatList
        style={styles.list}
        data={visibleItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onEdit={goToEdit} onDelete={confirmDelete} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>{emptyMessage}</Text>}
      />

      <AppButton title="Add New Item" onPress={goToAdd} />
      <AppButton title="View Statistics" variant="secondary" onPress={goToStats} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: COLORS.text,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: COLORS.neutral,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
  },
  filterChipText: {
    color: COLORS.text,
    fontWeight: '600',
  },
  filterChipTextActive: {
    color: '#fff',
  },
  clearButton: {
    marginTop: 8,
  },
  list: {
    flex: 1,
    marginTop: 16,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.mutedText,
    textAlign: 'center',
    marginTop: 40,
  },
});