import React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@/styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
