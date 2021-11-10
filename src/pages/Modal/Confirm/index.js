import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/modules/app/slice';
import Modal from 'components/Modal';

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const closeModalFnc = () => {
    dispatch(closeModal());
  };
  return (
    <Modal showActions title="Hello, I am confirm Modal" closeModal={closeModalFnc}>
      <div>Hello, I am confirm modal content </div>
    </Modal>
  );
};

export default ConfirmModal;
