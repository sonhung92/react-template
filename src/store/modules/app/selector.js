import { createSelector } from '@reduxjs/toolkit';

// Configs
const getIsLoading = (state) => state.app.isLoading;
export const isLoadingSelector = createSelector(getIsLoading, (isLoading) => isLoading);

const getConfigs = (state) => state.app.configs;
export const configsSelector = createSelector(getConfigs, (configs) => configs);

// Modal
const getIsOpenModal = (state) => state.app.isOpenModal;
export const isOpenModalSelector = createSelector(getIsOpenModal, (isOpenModal) => isOpenModal);

const getModalData = (state) => state.app.modalData;
export const modalDataSelector = createSelector(getModalData, (modalData) => modalData);
