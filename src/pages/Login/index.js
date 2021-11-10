import React, { useState, useContext, memo } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { login } from 'store/modules/auth/slice';
import { areEqualLocationKey } from 'common/hooks';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const onLogin = () => {
    dispatch(
      login({
        email: userName,
        password,
      }),
    );
  };
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color={theme.btnActionColor} textAlign="center">
          {t('login.title')}
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder={t('login.email')}
              name="userName"
              onChange={handleChange}
              value={userName}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder={t('login.password')}
              type="password"
              autoComplete="on"
              name="password"
              onChange={handleChange}
              value={password}
            />

            <Button color={theme.btnActionColor} fluid size="large" type="button" onClick={onLogin}>
              {t('login.submitText')}
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href="/" target="_blank" rel="noopener noreferrer">
            {t('login.forgetPassword')}
          </a>
        </Message>
        <Message>
          {t('login.newToUs')}{' '}
          <a href="/" target="_blank" rel="noopener noreferrer">
            {t('login.signUp')}
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default memo(LoginForm, areEqualLocationKey);
