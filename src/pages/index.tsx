import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { HomePage } from '../components/Home';
import { useTheme } from '../hooks/useTheme';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

export default function Home(props: HomeProps) {
  return (
    <Container>
      <HomePage serverSideProps={props} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};
