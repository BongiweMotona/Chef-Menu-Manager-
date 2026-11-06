import React, { useState } from 'react';
import AddMenuItemsScreen from './components/screens/AddMenuItemsScreen';
import ViewMenuItemsScreen from './components/screens/ViewMenuItemsScreen';
import StatisticsScreen from './components/screens/StatisticsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('View');
  const [menuItems, setMenuItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  const addMenuItem = (item) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  const updateMenuItem = (updatedItem) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteMenuItem = (id) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const showAddScreen = () => {
    setItemToEdit(null);
    setCurrentScreen('Add');
  };

  const showEditScreen = (item) => {
    setItemToEdit(item);
    setCurrentScreen('Add');
  };

  const showViewScreen = () => {
    setItemToEdit(null);
    setCurrentScreen('View');
  };

  const showStatsScreen = () => setCurrentScreen('Stats');

  if (currentScreen === 'Add') {
    return (
      <AddMenuItemsScreen
        goToView={showViewScreen}
        addMenuItem={addMenuItem}
        updateMenuItem={updateMenuItem}
        itemToEdit={itemToEdit}
      />
    );
  }

  if (currentScreen === 'Stats') {
    return <StatisticsScreen goToView={showViewScreen} menuItems={menuItems} />;
  }

  return (
    <ViewMenuItemsScreen
      goToAdd={showAddScreen}
      goToEdit={showEditScreen}
      goToStats={showStatsScreen}
      deleteMenuItem={deleteMenuItem}
      menuItems={menuItems}
    />
  );
}