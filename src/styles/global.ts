import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  body {
    background-color: ${({ theme }) => theme.dark.backgroundColor}
  }
`
