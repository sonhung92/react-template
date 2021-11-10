import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'semantic-ui-react';

const Radio = ({ name, options, label }) => {
  const { control, setValue, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ value }) => {
        return (
          <Form.Group grouped>
            <label htmlFor={value.toString()}>{label}</label>
            {Array.isArray(options) &&
              options.map((option) => (
                <Form.Radio
                  key={option.value}
                  error={
                    Object.keys(errors).includes(name)
                      ? { content: errors[name].message, pointing: 'below' }
                      : null
                  }
                  checked={value === option.value}
                  label={option.label}
                  value={option.value}
                  name={option.name}
                  onChange={(_, d) => {
                    setValue(name, d.value);
                  }}
                />
              ))}
          </Form.Group>
        );
      }}
    />
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  label: PropTypes.string,
};

Radio.defaultProps = {
  label: '',
};

export default Radio;
