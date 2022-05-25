import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    div {
      margin-left: 0;
      margin-top: 0.25rem;
      display: flex;

      span {
        font-size: 1rem;
        margin-left: 0.5rem;
      }
    }
  }
`;
