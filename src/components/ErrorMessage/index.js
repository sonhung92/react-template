import React from 'react';
import PropTypes from 'prop-types';
import StyledErrorMessage from './style';

const ErrorMessage = ({ name, component }) => (
  <StyledErrorMessage name={name} component={component} />
);

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string,
};

ErrorMessage.defaultProps = {
  component: 'div',
};

export default ErrorMessage;
