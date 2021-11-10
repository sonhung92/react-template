import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { hiddenScrollOnBody } from 'common/utils';
import { modalDataSelector, isOpenModalSelector } from 'store/modules/app/selector';

import MultipleModal from './MultipleModal';

const modalManager = {
  MultipleModal,
};

const ModalManager = () => {
  let renderModal;
  const modal = useSelector(modalDataSelector);
  const isOpen = useSelector(isOpenModalSelector);
  if (modal) {
    const { typeModal, modalProps } = modal;
    const ModalComponent = modalManager[typeModal];
    if (ModalComponent) {
      renderModal = <ModalComponent {...modalProps} />;
    }
  }
  hiddenScrollOnBody(isOpen);
  return <> {isOpen && renderModal}</>;
};

ModalManager.propTypes = {
  isOpen: PropTypes.bool,
};

ModalManager.defaultProps = {
  isOpen: false,
};

export default ModalManager;
