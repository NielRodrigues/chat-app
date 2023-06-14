import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";


const defaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#0E0F11",
    red: "#F53232",
    orange: "#F85B1C",
    yellow: "#FCC419",
    green: "#49F532",
    teal: "#B1F532",
    cyan: "#32DEF5",
    blue: "#3280F5",
    indigo: "#3260F5",
    purple: "#ae32F5",
    pink: "#FE58A5",
    gray100: "#FAF9F6",
    gray200: "#E9ECEf",
    gray300: "#DBDDDF",
    gray400: "#C2C3C3",
    gray500: "#ABB0b6",
    gray600: "#858687",
    gray700: "#35363A",
    gray800: "#232325",
    gray900: "#18181A",

    primary: "#9061FF",
    secondary: "#61C2FF",
    background: "#18181A",
    text: "#F3F3F3",


  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    base2x1: "24px",
    base3xl: "32px",
    base4xl: "40px",
    base5xl: "64px",
  },
};
export default defaultTheme;

export function Theme({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
