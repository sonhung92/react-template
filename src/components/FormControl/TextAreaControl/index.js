import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';

const TextAreaControl = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.TextArea
      error={meta.touched && !!meta.error ? { content: meta.error } : null}
      {...field}
      label={label}
      {...props}
    />
  );
};

TextAreaControl.propTypes = {
  label: PropTypes.string,
};

TextAreaControl.defaultProps = {
  label: '',
};

export default TextAreaControl;
