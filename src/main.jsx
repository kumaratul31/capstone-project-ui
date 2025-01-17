import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './handlers/AuthContext.jsx'

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  </AuthProvider >
)
