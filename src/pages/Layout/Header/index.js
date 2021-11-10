import React, { lazy, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Icon, Dropdown, Image, Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedSelector, userSelector } from 'store/modules/auth/selector';
import { logout } from 'store/modules/auth/slice';
import { getItem } from 'common/storage';
import { LOCAL_STORAGE } from 'common/constants';
import IMG_LOCAL from 'common/constants/image';
import { ThemeContext } from 'styled-components';
import { StyledHeader, Logo, RightContent, StyledFlag } from './style';

const Button = lazy(() => import('components/Button'));

const Header = ({ toggleMenu }) => {
  const { i18n, t } = useTranslation();
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector(isLoggedSelector);
  const user = useSelector(userSelector);
  const changeLanguage = (event) => {
    const { target } = event;
    const language = target.getAttribute('language');
    i18n.changeLanguage(language);
  };

  const pushLogin = () => {
    history.push('/login');
  };

  const trigger = (
    <>
      <div className="color-white">
        <Image avatar src={IMG_LOCAL.AVATAR} />
        {user?.firstName} {user?.lastName}
      </div>
    </>
  );

  const onSignOut = (event, { value }) => {
    if (value === 'signOut') {
      dispatch(logout());
    }
  };

  const currentLanguage = getItem(LOCAL_STORAGE.I18NEXTLNG);
  return (
    <StyledHeader>
      <Grid className="w-100-per">
        <Grid.Row>
          <Grid.Column floated="left" mobile={6} tablet={3} computer={3}>
            <Link to="/">
              <Logo src={IMG_LOCAL.LOGO} />
            </Link>
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
            <RightContent>
              <Icon
                name="sidebar"
                size="big"
                onClick={toggleMenu}
                color={theme.btnActionColor}
                className="pointer"
              />
              <StyledFlag
                name="us"
                language="en"
                onClick={changeLanguage}
                active={`${currentLanguage === 'en'}`}
              />
              <StyledFlag
                name="vn"
                language="vi"
                onClick={changeLanguage}
                active={`${currentLanguage === 'vi'}`}
              />
              {isLogged ? (
                <Dropdown
                  trigger={trigger}
                  options={[
                    {
                      key: 'signOut',
                      text: t('header.logout'),
                      icon: 'sign out',
                      value: 'signOut',
                      onClick: onSignOut,
                    },
                  ]}
                  pointing="top left"
                  icon={null}
                />
              ) : (
                <Button
                  className="mr-0"
                  content={t('header.login')}
                  basic
                  color={theme.btnActionColor}
                  onClick={pushLogin}
                />
              )}
            </RightContent>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledHeader>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

Header.defaultProps = {};

export default Header;
