import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth'
import GlobalStyles from './styles/global';
import theme from './styles/theme';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
