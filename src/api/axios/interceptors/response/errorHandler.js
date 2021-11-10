import { store } from 'store';
import Toast from 'common/toast';
import { openModal } from 'store/modules/app/slice';
import I18N from 'translations/i18n';
import { MODAL_TYPES } from 'common/constants';

const handleNetworkError = () => Toast.error(`${I18N.t('apiError.NetworkError')}`);

const handleBadRequest = (errorKey) =>
  store.dispatch(
    openModal({
      typeModal: MODAL_TYPES.ERROR,
      msgError: errorKey,
    }),
  );

const handleUnauthorized = () => Toast.error(`${I18N.t('apiError.SessionExpired')}`);

const handleForbidden = () => Toast.error(`${I18N.t('apiError.Forbidden')}`);

const handleRequestNotFound = () => Toast.error(`${I18N.t('apiError.NotFound')}`);

const handleMethodNotAllowed = () => Toast.error(`${I18N.t('apiError.MethodNotAllow')}`);

const handleServerError = () => Toast.error(`${I18N.t('apiError.ServerError')}`);

const errorHandler = (error) => {
  const status = error?.response?.status;
  if (error.message === 'Network Error' && !error.response) {
    handleNetworkError();
  }
  switch (status) {
    case 400: {
      // Translation error from API, base on format data from API to get errorKey
      const errorKey = 'BadRequest';
      handleBadRequest(errorKey);
      break;
    }
    case 401:
      handleUnauthorized();
      break;
    case 403:
      handleForbidden();
      break;
    case 405:
      handleMethodNotAllowed();
      break;
    case 500:
      handleServerError();
      break;
    default:
      handleRequestNotFound(); // 404
      break;
  }

  return Promise.reject(error);
};

export default errorHandler;
