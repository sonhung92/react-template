import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Form } from 'semantic-ui-react';

const CheckBoxControl = ({ options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [currentCheck, setCurrentChecked] = useState('');

  return (
    <Form.Group inline>
      {Array.isArray(options) &&
        options.map((option) => (
          <Form.Radio
            key={option.value}
            label={option.label}
            value={option.value}
            name={option.name}
            checked={currentCheck === option.value}
            onChange={(_, { value }) => {
              setCurrentChecked(value);
              let newValue = field.value;
              newValue = value;
              helpers.setValue(newValue);
              helpers.setTouched(true);
            }}
            error={meta.touched && !!meta.error ? { content: meta.error } : null}
          />
        ))}
    </Form.Group>
  );
};

CheckBoxControl.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
};

CheckBoxControl.defaultProps = {
  options: [],
};

export default CheckBoxControl;
