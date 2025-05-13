import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#64b5f6', // azul pastel
    },
    secondary: {
      main: '#90caf9', // azul claro pastel
    },
    background: {
      default: '#e3f2fd', // fondo general azul claro
      paper: '#ffffff', // tarjetas blancas
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
});

export default theme;
