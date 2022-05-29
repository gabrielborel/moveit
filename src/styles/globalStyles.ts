import { createGlobalStyle } from 'styled-components';

interface Theme {
  colors: {
    [x: string]: string;
  };
}

export default createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap');

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
    transition: background, background-color, color, 0.05s;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
 
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.blueDark};
      border-radius: 8px;
      margin: 0.1rem;
    }
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
