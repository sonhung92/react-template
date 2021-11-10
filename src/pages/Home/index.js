import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title } from './style';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t('home.welcome')}</Title>
    </Container>
  );
};

export default Home;
