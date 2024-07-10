import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
    background-color: #f8efba;
  list-style: none;
  text-align: center;
  }
  `;
