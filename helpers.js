import { COURSES } from './theme';

// Returns an error message, or null if the item is valid
export const validateMenuItem = ({ dishName, description, price }) => {
  if (!dishName.trim()) return 'Please enter a dish name.';
  if (!description.trim()) return 'Please enter a description.';
  if (!price.trim()) return 'Please enter a price.';
  if (isNaN(price) || Number(price) <= 0) {
    return 'Please enter a valid price greater than 0.';
  }
  return null;
};

// Applies the name search and course filter together
export const filterMenuItems = (items, searchText, selectedCourse) => {
  return items.filter((item) => {
    const matchesName = item.dishName
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    const matchesCourse = selectedCourse === 'All' || item.course === selectedCourse;
    return matchesName && matchesCourse;
  });
};

// Total items, average price, and number of items per course
export const calculateStatistics = (items) => {
  const total = items.length;
  const totalPrice = items.reduce((sum, item) => sum + Number(item.price), 0);
  const average = total === 0 ? 0 : totalPrice / total;

  const perCourse = {};
  COURSES.forEach((course) => {
    perCourse[course] = items.filter((item) => item.course === course).length;
  });

  return { total, average, perCourse };
};