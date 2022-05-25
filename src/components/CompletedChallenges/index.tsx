import { useChallenges } from '../../hooks/useChallenges';
import { Container } from './styles';

export const CompletedChallenges = () => {
  const { challengesCompleted } = useChallenges();

  const formattedChallengesCompleted = String(challengesCompleted).padStart(
    2,
    '0'
  );

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{formattedChallengesCompleted}</span>
    </Container>
  );
};
