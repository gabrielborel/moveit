import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 5rem auto;

  .logo {
    width: fit-content;
    margin: 7rem auto;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem 4rem;

  p {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 1px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Leaderboard = styled.section`
  margin: 0 1rem;

  .table-heading {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.4;
    position: relative;
    margin-bottom: 1.5rem;

    p {
      position: absolute;
    }

    p:nth-child(2) {
      left: 80px;
    }

    p:nth-child(3) {
      right: 360px;

      @media (max-width: 770px) {
        display: none;
      }
    }

    p:nth-child(4) {
      right: 80px;

      @media (max-width: 770px) {
        right: 10px;
      }
    }
  }

  .user-row {
    width: 100%;
    opacity: 1;
    display: flex;
    gap: 0.2rem;
    margin-bottom: 0.5rem;

    .position {
      display: flex;
      align-items: center;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.primary};
      font-size: 1.5rem;
      min-height: 50px;
      min-width: 50px;
      max-width: 72px;
      max-height: 112px;
      padding: 2rem;
      border-radius: 5px;

      @media (max-width: 500px) {
        padding: 1rem 1rem 1rem 1.4rem;
      }
    }

    .user-data {
      width: 100%;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      padding: 1rem;
      position: relative;

      .user-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;

        @media (max-width: 500px) {
          width: 50px;
          height: 50px;
        }
      }

      .user {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        align-items: flex-start;
        background-color: ${({ theme }) => theme.colors.primary};
        margin-left: 0.5rem;

        .name {
          font-weight: 600;
          font-size: 1.2rem;
          padding: 0;
        }

        .level {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          padding: 0;
        }
      }

      .challenges,
      .experience {
        position: absolute;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 0.5rem;
        border-radius: 5px;
        font-weight: 600;

        span {
          color: ${({ theme }) => theme.colors.blueDark};
          margin-right: 0.2rem;
        }
      }

      .challenges {
        right: 300px;

        @media (max-width: 770px) {
          display: none;
        }
      }

      .experience {
        right: 110px;
        text-align: left;

        @media (max-width: 770px) {
          right: 20px;
        }
      }
    }
  }
`;
