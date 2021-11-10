import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedSelector } from 'store/modules/auth/selector';

function PrivateRoute({ component: Component, ...rest }) {
  const isLogged = useSelector(isLoggedSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )}
    />
  );
}

PrivateRoute.propTypes = {
  location: PropTypes.shape({}),
  component: PropTypes.elementType.isRequired,
};

PrivateRoute.defaultProps = {
  location: {},
};

export default PrivateRoute;
