import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND };
  color: ${({theme }) => theme.COLORS.TEXT_COLOR_WHITE };

  -webkit-font-smoothing: antialiased;
}

html, body, input, button, textarea {
  font-family: "Roboto Slab", serif;
  font-size: 1.6rem;
  outline: none;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

`;
