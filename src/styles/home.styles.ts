import styled from 'styled-components';

export const MainContent = styled.div`
  margin-top: 7rem;
  display: flex;
  gap: 8rem;
  max-width: 1200px;

  @media (max-width: 930px) {
    flex-direction: column;
    padding: 0 5rem;
    gap: 5rem;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    padding: 0;
  }
`;
