import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { themes } from '../constants/Theme';

function ThemeContainer({ children }) {
  const { appearance } = useSelector((state) => state.record);
  
  return (
    <ThemeProvider theme={themes[appearance]}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeContainer;