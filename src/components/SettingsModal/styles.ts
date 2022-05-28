import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
`;

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.overlay};
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-left: 0 !important;
`;

export const Container = styled.div`
  margin: 2rem 2rem 8rem 2rem !important;
  background: ${({ theme }) =>
    theme.type === 'dark'
      ? 'rgba( 18, 18, 18, 0.5 )'
      : 'rgba( 242, 243, 245, 0.5 )'};
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2;

  p {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    position: absolute;
    top: 130px;
    right: 40px;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    transition: color, transform, 0.2s;

    &:hover {
      transform: scale(1.07);
      color: ${({ theme }) => theme.colors.blueDark};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      transition: color, transform, 0.2s;
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      border: none;
      background-color: transparent;

      &:hover {
        transform: scale(1.07);
        color: ${({ theme }) => theme.colors.blueDark};
      }
    }
  }
`;
