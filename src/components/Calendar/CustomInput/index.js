import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { StyledIcon } from './style';

const CustomInput = forwardRef(({ value, onClick }, _ref) => (
  <Input
    label={{
      basic: true,
      content: <StyledIcon name="calendar alternate outline" size="large" onClick={onClick} />,
    }}
    labelPosition="right"
    value={value}
    onClick={onClick}
    ref={_ref}
  />
));

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

CustomInput.defaultProps = {
  onClick: () => {},
  value: '',
};

export default CustomInput;
