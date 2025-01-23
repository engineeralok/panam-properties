import { Theme } from './types';

export const panamTheme: Theme = {
  name: 'panam',
  brandName: 'Panam Properties',
  colors: {
    primary: {
      main: '#9f7c2d', // gold
      light: '#f8e07d',
      dark: '#7a5f22',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#091f5b', // navy
      light: '#6f96d1',
      contrastText: '#ffffff'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    text: {
      primary: '#091f5b',
      secondary: 'rgba(9, 31, 91, 0.7)',
      disabled: 'rgba(9, 31, 91, 0.5)'
    },
    border: {
      main: '#d8d3cf',
      light: 'rgba(216, 211, 207, 0.2)'
    }
  }
};

// You can add more themes here
export const themes: Record<string, Theme> = {
  panam: panamTheme
};