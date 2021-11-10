import React from 'react';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';
import { Container, StyledTitle } from './style';

const PageNotFound = () => {
  const history = useHistory();
  const redirectHomePage = () => {
    history.push('/');
  };

  return (
    <Container>
      <StyledTitle>
        <p>Oops!</p>
        <p>Page not found!</p>
        <Button secondary onClick={redirectHomePage} content="Go to home page" />
      </StyledTitle>
    </Container>
  );
};

export default PageNotFound;
