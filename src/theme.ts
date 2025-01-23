 import { createTheme } from '@mui/material/styles';

 
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#64b5f6',  
    },
    background: {
      default: '#fafafa',  
      paper: '#ffffff',    
    },
    text: {
      primary: '#333',     
      secondary: '#757575',
    },
  },
});

 
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',  
    },
    background: {
      default: '#121212',  
      paper: '#1e1e1e',    
    },
    text: {
      primary: '#ffffff',  
      secondary: '#b0b0b0',
    },
  },
});