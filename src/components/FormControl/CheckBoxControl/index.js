import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Form } from 'semantic-ui-react';

const CheckBoxControl = ({ options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Form.Group inline>
      {Array.isArray(options) &&
        options.map((option) => (
          <Form.Checkbox
            key={option.value}
            label={option.label}
            value={option.value}
            onChange={(_, { value, checked }) => {
              let newValue;
              if (options.length > 1) {
                newValue = [...field.value];
                if (!newValue.includes(value)) {
                  newValue = [...newValue, value];
                } else {
                  newValue = newValue.filter((v) => v !== value);
                }
              } else {
                newValue = checked;
              }
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
