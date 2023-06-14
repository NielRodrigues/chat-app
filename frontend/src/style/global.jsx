import { createGlobalStyle } from "styled-components";
import defaultTheme from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body{
    background: ${defaultTheme.colors.background};
    color: ${defaultTheme.colors.text};
  }
`;
