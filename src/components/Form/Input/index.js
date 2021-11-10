import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Controller, useFormContext } from 'react-hook-form';

const Input = ({ name, label }) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={(rest) => (
        <Form.Input
          {...rest}
          label={label}
          error={
            Object.keys(errors).includes(name)
              ? { content: errors[name].message, pointing: 'below' }
              : null
          }
          fluid
        />
      )}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
};

export default Input;
