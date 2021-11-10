import axios from 'axios';
import { WEBHOOK_URL } from 'common/constants/api';

export const slackHook = (error) => {
  return axios.post(
    WEBHOOK_URL,
    { text: error },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};
