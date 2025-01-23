export interface ThemeColors {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    contrastText: string;
  };
  background: {
    default: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: {
    main: string;
    light: string;
  };
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  brandName: string;
}