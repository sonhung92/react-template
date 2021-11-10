import React from 'react';
import { Modal as SemanticModal, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalHeader from './Header';
import ModalContent from './Content';

const Modal = ({ closeModal, children, title, labelCancel, labelAgree, showActions, size }) => {
  return (
    <SemanticModal open closeIcon onClose={closeModal} size={size}>
      <ModalHeader content={title} />
      <ModalContent>{children}</ModalContent>
      {showActions && (
        <SemanticModal.Actions>
          <Button color="red" onClick={closeModal}>
            <Icon name="remove" /> {labelCancel}
          </Button>
          <Button color="green" onClick={closeModal}>
            <Icon name="checkmark" /> {labelAgree}
          </Button>
        </SemanticModal.Actions>
      )}
    </SemanticModal>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  labelCancel: PropTypes.string,
  labelAgree: PropTypes.string,
  showActions: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),
};

Modal.defaultProps = {
  closeModal: () => {},
  labelCancel: 'No',
  labelAgree: 'Yes',
  showActions: false,
  size: 'small',
};

export default Modal;
