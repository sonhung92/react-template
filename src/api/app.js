export const getConfigsAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          mainColor: 'black',
        },
      });
    }, 500);
  });
