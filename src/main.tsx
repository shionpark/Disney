import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@/styles';

import RootRouter from './routers/RootRouter.tsx';
import { queryClient } from './utils/queryConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={RootRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
