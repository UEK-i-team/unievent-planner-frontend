import 'styled-components'; 

declare module 'styled' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string; 
    };
  }
}