import { createGlobalStyle } from 'styled-components';

interface Theme {
  colors: {
    [x: string]: string;
  };
}

export default createGlobalStyle<{ theme: Theme }>`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background, background-color, color 0.05s;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, text-area {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
