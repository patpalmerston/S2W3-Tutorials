import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkValue, setDarkValue] = useLocalStorage('DarkMode');
  
  useEffect(() => {
    
    darkValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  }, [darkValue])
  
  return [darkValue, setDarkValue]
}

export default useDarkMode;