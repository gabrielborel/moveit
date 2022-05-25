import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;

  .login {
    .icon {
      display: block;
      margin: 0 auto 1rem;
      color: ${({ theme }) => theme.colors.text};
      height: 90px;
      width: 90px;
    }

    p {
      width: fit-content;
      margin: 0 auto;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 100%;
      border: 3px solid ${({ theme }) => theme.colors.blueDark};
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 1.1rem;
      color: ${({ theme }) => theme.colors.blueDark};
      font-size: 1.1rem;
      border-radius: 8px;
      font-weight: 700;
      transition: background-color, color, 0.2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.blueDark};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
