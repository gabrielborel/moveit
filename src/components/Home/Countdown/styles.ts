import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.background};
    }

    span:last-child {
      border-left: 1px solid ${({ theme }) => theme.colors.background};
    }
  }
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blueDark};
  }
`;

export const StopCountdownButton = styled(StartCountdownButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.title};

  .icon {
    color: red;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FinishedButton = styled(StartCountdownButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  cursor: not-allowed;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
