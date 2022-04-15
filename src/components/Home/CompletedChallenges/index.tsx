import { useChallenges } from '../../../hooks/useChallenges';
import { Container } from './styles';

export const CompletedChallenges = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};
