import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};

  font-weight: 500;

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;
