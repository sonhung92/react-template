import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/modules/app/slice';
import Button from 'components/Button';
import { MODAL_TYPES } from 'common/constants';
import { areEqualLocationKey } from 'common/hooks';

const ModalExample = () => {
  const dispatch = useDispatch();
  const openModalFnc = (typeModal) => {
    dispatch(
      openModal({
        typeModal,
      }),
    );
  };

  return (
    <>
      <Button
        content="Click to open confirm modal"
        onClick={() => openModalFnc(MODAL_TYPES.MULTIPLE_MODAL)}
        size="large"
        color="green"
        basic
      />
    </>
  );
};

ModalExample.propTypes = {};
ModalExample.defaultProps = {};

export default memo(ModalExample, areEqualLocationKey);
