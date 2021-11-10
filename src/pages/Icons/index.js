import { areEqualLocationKey } from 'common/hooks';
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import Container from './Container';

const IconPage = () => {
  const location = useLocation();
  const { activeFont } = location.state;

  return <Container currentFont={activeFont} />;
};

export default memo(IconPage, areEqualLocationKey);
