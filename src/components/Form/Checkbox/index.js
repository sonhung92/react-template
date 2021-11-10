import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'semantic-ui-react';

const Checkbox = ({ name, options, label }) => {
  const { control, setValue, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ value }) => {
        return (
          <>
            <Form.Group grouped>
              <label htmlFor={value.toString()}>{label}</label>
              {Array.isArray(options) &&
                options.map((option) => (
                  <Form.Checkbox
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    error={
                      Object.keys(errors).includes(name)
                        ? { content: errors[name].message, pointing: 'left' }
                        : null
                    }
                    onChange={(_, d) => {
                      let newValue;
                      if (options.length > 1) {
                        newValue = [...value];
                        if (!newValue.includes(d.value)) {
                          newValue = [...newValue, d.value];
                        } else {
                          newValue = newValue.filter((v) => v !== d.value);
                        }
                      } else {
                        newValue = d.checked;
                      }
                      setValue(name, newValue);
                    }}
                  />
                ))}
            </Form.Group>
          </>
        );
      }}
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

Checkbox.defaultProps = {
  label: '',
};

export default Checkbox;
