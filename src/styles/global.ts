import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`;

export default GlobalStyle;
