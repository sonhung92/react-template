import { createSlice } from '@reduxjs/toolkit';
import { authLoading } from 'store/modules/auth/slice';

const startLoading = (state) => {
  state.isLoading = true;
};

const endLoading = (state) => {
  state.isLoading = false;
};

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isOpenModal: false,
    modalData: {},
    configs: {},
  },
  reducers: {
    // Configs
    getConfigs: () => {},
    getConfigsSuccess: (state, action) => {
      const { configs } = action.payload;
      state.configs = configs;
    },
    getConfigsFailure: () => {},
    // Modal
    openModal(state, action) {
      state.isOpenModal = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isOpenModal = false;
      state.modalData = {};
    },
  },
  extraReducers: (builder) => {
    authLoading(builder, startLoading, endLoading);
    // other module need loading
  },
});

export const {
  getConfigs,
  getConfigsSuccess,
  getConfigsFailure,
  openModal,
  closeModal,
} = appSlice.actions;

export default appSlice.reducer;
