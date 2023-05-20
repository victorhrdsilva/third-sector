import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: red;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
