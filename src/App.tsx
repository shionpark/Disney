import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from './components';

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
