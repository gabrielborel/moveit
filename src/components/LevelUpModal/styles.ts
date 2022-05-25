import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.overlay};
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.25rem;
  }

  .close-modal {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }

  .twitter {
    display: block;
    background-color: ${({ theme }) => theme.colors.blueTwitter};
    border: none;
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 1px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
