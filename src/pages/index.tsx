import styled from 'styled-components';
import { HomePage } from '../components/Home';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}
