export const changeTheme = () => {
  document.documentElement.classList.toggle('dark_mode');
  const isDarkMode = document.documentElement.classList.contains('dark_mode');
  return isDarkMode ? 'LIGHT MODE' : 'DARK MODE';
};
