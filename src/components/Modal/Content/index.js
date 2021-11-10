import React from 'react';
import PropTypes from 'prop-types';
import StyledContentModal from './style';

const ModalContent = ({ children }) => <StyledContentModal>{children}</StyledContentModal>;

ModalContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalContent;
