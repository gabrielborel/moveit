import { Container } from './styles';

export const ExperienceBar = () => {
  const completed = '90%';
  const percentage = Number(completed.replace(`%`, '')) / 100;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: completed }} />
        <span style={{ left: completed }}>{600 * percentage} xp</span>
      </div>
      <span>600 xp</span>
    </Container>
  );
};
