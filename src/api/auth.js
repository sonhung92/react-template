import { uniqueId } from 'lodash';

export const authenticateAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          firstName: 'Alex',
          lastName: 'Bato',
          token: uniqueId(),
        },
      });
    }, 500);
  });

export const signOut = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
      });
    }, 500);
  });
