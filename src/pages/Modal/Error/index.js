import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/modules/app/slice';
import { modalDataSelector } from 'store/modules/app/selector';
import Modal from 'components/Modal';

const ErrorModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { msgError } = useSelector(modalDataSelector);
  const closeModalFnc = () => {
    dispatch(closeModal());
  };
  return (
    <Modal size="tiny" title="Hello, I am Error Modal" closeModal={closeModalFnc}>
      <div>{t(`apiError.${msgError}`)}</div>
    </Modal>
  );
};

export default ErrorModal;
