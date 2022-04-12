import Image from 'next/image';
import { Container } from './styles';

export const Profile = () => {
  return (
    <Container>
      <Image
        src='https://github.com/gabrielborel.png'
        alt='Gabriel Borel'
        width='80px'
        height='80px'
        style={{ borderRadius: '50%' }}
      />
      <div>
        <strong>Gabriel Borel</strong>
        <p>
          <Image
            src='/icons/level.svg'
            alt='Level Icon'
            width='15px'
            height='15px'
          />
          <span>Level 1</span>
        </p>
      </div>
    </Container>
  );
};
