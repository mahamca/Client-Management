import { useState, useEffect } from 'react';

const useTheme = () => {
  // Get the theme from localStorage or default to 'light'
  const storedTheme = localStorage.getItem('theme');
  const [isDark, setIsDark] = useState(storedTheme === 'dark'); // Check stored theme (default 'light')

  // Toggle the theme
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Effect to update the theme on <html> element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark'); // Add dark class to <html> for global dark theme
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class for light theme
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggleTheme };
};

export default useTheme;
