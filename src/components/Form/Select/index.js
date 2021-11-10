import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'semantic-ui-react';

const Select = ({ name, options, label }) => {
  const { control, setValue, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={(rest) => {
        return (
          <Form.Select
            {...rest}
            options={options}
            label={label}
            error={
              Object.keys(errors).includes(name)
                ? { content: errors[name].message, pointing: 'below' }
                : null
            }
            onChange={(_, d) => {
              setValue(name, d.value);
            }}
          />
        );
      }}
    />
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string,
};

Select.defaultProps = {
  label: '',
};

export default Select;
