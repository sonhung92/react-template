import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledTextArea } from './style';

const TextArea = ({ name, label }) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={(rest) => (
        <StyledTextArea
          {...rest}
          label={label}
          error={
            Object.keys(errors).includes(name)
              ? { content: errors[name].message, pointing: 'below' }
              : null
          }
        />
      )}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

TextArea.defaultProps = {
  label: '',
};

export default TextArea;
