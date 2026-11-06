import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AppButton from '../AppButton';
import { COLORS, COURSES } from '../theme';
import { validateMenuItem } from '../helpers';

export default function AddMenuItemsScreen({
  goToView,
  addMenuItem,
  updateMenuItem,
  itemToEdit,
}) {
  const isEditing = Boolean(itemToEdit);

  const [dishName, setDishName] = useState(isEditing ? itemToEdit.dishName : '');
  const [description, setDescription] = useState(isEditing ? itemToEdit.description : '');
  const [course, setCourse] = useState(isEditing ? itemToEdit.course : COURSES[0]);
  const [price, setPrice] = useState(isEditing ? itemToEdit.price : '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    const error = validateMenuItem({ dishName, description, price });
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage('');

    const itemData = {
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price,
    };

    if (isEditing) {
      updateMenuItem({ ...itemData, id: itemToEdit.id });
    } else {
      addMenuItem({ ...itemData, id: Date.now().toString() });
    }

    Alert.alert(
      'Success',
      isEditing ? 'Menu item updated successfully!' : 'Menu item added successfully!',
      [{ text: 'OK', onPress: goToView }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{isEditing ? 'Edit Menu Item' : 'Add Menu Item'}</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="e.g. Steak and Chips"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe the dish"
        multiline
      />

      <Text style={styles.label}>Course</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={course} onValueChange={setCourse}>
          {COURSES.map((courseName) => (
            <Picker.Item key={courseName} label={courseName} value={courseName} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="e.g. 120"
        keyboardType="numeric"
      />

      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <AppButton
        title={isEditing ? 'Update Item' : 'Save Item'}
        onPress={handleSave}
        style={styles.saveSpacing}
      />
      <AppButton title="Cancel" variant="secondary" onPress={goToView} />
    </ScrollView>
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
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.text,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
    color: COLORS.text,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 14,
    marginTop: 12,
  },
  saveSpacing: {
    marginTop: 24,
  },
});