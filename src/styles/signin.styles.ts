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

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 8rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 6rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0 2rem;
  }

  .login {
    .icon {
      display: block;
      margin: 0 auto 1rem;
      color: ${({ theme }) => theme.colors.blueDark};
      height: 90px;
      width: 90px;
    }

    p {
      width: fit-content;
      margin: 0 auto;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.blueDark};
      font-weight: 600;
    }

    button {
      transform: skewX(-15deg);
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 200px;
      height: 60px;
      text-align: center;
      border: 0px solid ${({ theme }) => theme.colors.blueDark};
      background-color: ${({ theme }) => theme.colors.background};
      padding: 1.1rem;
      color: ${({ theme }) => theme.colors.blueDark};
      font-size: 1.1rem;
      font-weight: 700;
      transition: background-color, color, 0.2s;
      line-height: 45px;
      position: relative;
      text-decoration: none;
      text-transform: uppercase;

      svg {
        height: 60px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }

      rect {
        fill: none;
        stroke: ${({ theme }) => theme.colors.blueDark};
        stroke-width: 2;
        stroke-dasharray: 422, 0;
        transition: all 0.35s linear;
      }

      &:hover {
        background-color: #b0c4de;
        font-weight: 900;
        letter-spacing: 1px;

        rect {
          stroke-width: 5;
          stroke-dasharray: 15, 310;
          stroke-dashoffset: 48;
          transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    }
  }
`;
