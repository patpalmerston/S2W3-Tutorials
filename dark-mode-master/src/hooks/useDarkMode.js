import React, { useState, useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [value, setDark] = useLocalStorage(key, initialValue);
  
  useEffect(() => {
    const bodyTag = document.querySelector('body')
    value ? bodyTag.classList.add('dark-mode') : bodyTag.classList.remove('dark-mode');
  }, [value])
  
  return [value, setDark]
}

export default useDarkMode;