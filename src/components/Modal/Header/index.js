import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './style';

const ModalHeader = ({ content }) => <StyledHeader content={content} />;

ModalHeader.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ModalHeader;
