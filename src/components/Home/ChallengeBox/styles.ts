import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    padding: 0 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
    text-align: left;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const Btn = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeFailedBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.red};
`;
export const ChallengeSucceededBtn = styled(Btn)`
  background: ${({ theme }) => theme.colors.green};
`;
