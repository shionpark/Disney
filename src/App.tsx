import React from 'react';
import { Outlet } from 'react-router';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
