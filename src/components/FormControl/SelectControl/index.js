import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';

const SelectControl = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Form.Select
      error={meta.touched && !!meta.error ? { content: meta.error } : null}
      clearable
      value={field.value || null}
      onChange={(_, d) => helpers.setValue(d.value)}
      onBlur={() => helpers.setTouched(true)}
      {...props}
      placeholder={label}
      label={label}
    />
  );
};

SelectControl.propTypes = {
  label: PropTypes.string,
};

SelectControl.defaultProps = {
  label: '',
};

export default SelectControl;
