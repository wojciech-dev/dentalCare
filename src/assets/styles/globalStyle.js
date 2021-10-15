import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .wrapper {
    width: 1140px;
    margin: 0 auto;

    @media (max-width: 1140px) {
      width: 100%;
      padding: 15px 20px;
    }
  }

  .button {
    cursor: pointer;
    border: 0;
    outline: 0;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 700;
    background-color: #0facf1;
    padding: 10px 20px;
    color: #ffffff;
    transition: .4s;

    &:hover {
      background: #111111;
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }

  .header {
      text-align: center;
      margin: 20px 0px 40px 0px;

      h1 {
        font-size: 3rem;
        color: #111111;
        margin-bottom: 20px;
      }

      p {
        font-style: italic;
        color: #999999;
        margin-bottom: 20px;
      }
    }

`

export default GlobalStyle;