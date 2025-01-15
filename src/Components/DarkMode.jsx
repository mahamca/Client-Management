import React from 'react';
import { Button } from './ui/button'; // ShadCN UI Button
import useTheme from '@/hooks/useTheme';  // Import custom theme hook
import { useNavigate } from 'react-router-dom';



const DarkMode = () => {
  const { isDark, toggleTheme } = useTheme();  // Use the theme hook
  
  const navigate=useNavigate()


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-6">
            Welcome to Full Page Dark Mode Example
          </h1>
          <Button onClick={()=>navigate('/login')}>Login</Button>

          {/* Button to toggle theme */}
          <Button
            variant="primary"
            className="bg-blue-500 text-white dark:bg-blue-700 px-6 py-3 rounded-lg transition-all"
            onClick={toggleTheme}
          >
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </div>
      </div>

      {/* Additional content */}
      <div className="bg-white dark:bg-gray-800 py-8 mt-10">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-semibold">This is an example of a full page layout with theme toggle</h2>
          <p className="mt-4 text-lg">
            Here we demonstrate how to implement dark mode and light mode across the entire page with React, ShadCN UI, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
