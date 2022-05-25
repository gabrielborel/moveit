/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useChallenges } from '../../hooks/useChallenges';
import { useTheme } from '../../hooks/useTheme';

import { Container } from './styles';
import { BsFillMoonFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { SettingsModal } from '../SettingsModal';

export const Profile = () => {
  const { level } = useChallenges();
  const session = useSession();

  return (
    <Container>
      <img
        src={session.data?.user.image}
        alt='Gabriel Borel'
        width='80px'
        height='80px'
        style={{ borderRadius: '50%' }}
      />
      <div>
        <strong>{session.data?.user.name}</strong>
        <div>
          <Image
            src='/icons/level.svg'
            alt='Level Icon'
            width='15px'
            height='15px'
          />
          <span>Level {level}</span>
        </div>
      </div>

      <SettingsModal />
    </Container>
  );
};
