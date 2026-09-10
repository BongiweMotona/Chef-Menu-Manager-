import React, { useState } from 'react';
import AddMenuItemsScreen from './components/screens/AddMenuItemsScreen';
import ViewMenuItemsScreen from './components/screens/ViewMenuItemsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Add');
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return currentScreen === 'Add' ? (
    <AddMenuItemsScreen
      goToView={() => setCurrentScreen('View')}
      addMenuItem={addMenuItem}
    />
  ) : (
    <ViewMenuItemsScreen
      goToAdd={() => setCurrentScreen('Add')}
      menuItems={menuItems}
    />
  );
}