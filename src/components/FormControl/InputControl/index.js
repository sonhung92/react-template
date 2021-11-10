import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Form } from 'semantic-ui-react';

const InputControl = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Input
      error={meta.touched && !!meta.error ? { content: meta.error } : null}
      {...field}
      fluid
      label={label}
    />
  );
};

InputControl.propTypes = {
  label: PropTypes.string,
};

InputControl.defaultProps = {
  label: '',
};

export default InputControl;
