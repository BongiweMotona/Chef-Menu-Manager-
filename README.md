# Chef's Menu Manager

A React Native (Expo) mobile application that helps a restaurant chef manage the menu from a mobile device. Built for the MAST POE.

**Student:** [ST1052889]

## Features

- Add new menu items (dish name, description, course, price)
- View all menu items
- Edit existing menu items
- Delete menu items (with a confirmation prompt)
- Search menu items by dish name
- Filter menu items by course (All, Starter, Main Course, Dessert)
- Clear the search and filter to show all items again
- View menu statistics: total items, average price and items per course

## Project Structure

- `App.js` - holds the menu data and controls which screen is shown
- `components/screens/AddMenuItemsScreen.js` - add and edit form
- `components/screens/ViewMenuItemsScreen.js` - list, search, filter, edit and delete
- `components/screens/StatisticsScreen.js` - menu statistics
- `components/MenuItemCard.js` - reusable card for one menu item
- `components/AppButton.js` - reusable button (primary, secondary, danger styles)
- `components/theme.js` - shared colours and the list of courses
- `components/helpers.js` - validation, filtering and statistics functions

## Change Log (Part 2 to Final PoE)

### New features
- Edit and update existing menu items. The add form is reused and opens pre-filled with the selected item.
- Delete menu items, with a confirmation prompt before removal.
- Search by dish name (not case sensitive).
- Filter by course using selectable buttons, working together with the search.
- "Clear Search and Filter" button to display all items again.
- New statistics screen showing total items, average price and number of items per course.
- Added a message for when a search or filter returns no results, separate from the "no items added yet" message.

### Refactoring
- Moved validation into a reusable `validateMenuItem` function in `helpers.js`.
- Created reusable `filterMenuItems` and `calculateStatistics` functions in `helpers.js`.
- Created a reusable `AppButton` component, replacing repeated button code on each screen.
- Created a reusable `MenuItemCard` component for displaying menu items.
- Moved colours and course names into `theme.js` so they are defined in one place.
- Combined the add and edit forms into one screen instead of duplicating code.
- Moved the add, update and delete logic into `App.js` so all screens use the same data.

### User experience improvements
- Validation errors now appear as red text on the form instead of only in a popup.
- After saving an item, the user is returned to the menu list.
- Added a Cancel button on the form.
- The app now opens on the Menu Items screen.
- Consistent colours, button styles and spacing across all screens.
- Navigation between the list, form and statistics screens through clear buttons.

## How to Run

1. Open the project in Expo Snack (https://snack.expo.dev) or run `npm install` then `npx expo start`.
2. Scan the QR code with the Expo Go app, or use the Android emulator.

## Links

- 
