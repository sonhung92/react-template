export const hiddenScrollOnBody = (hidden) => {
  const body = document.getElementsByTagName('body');
  if (hidden) {
    body[0].classList.add('overflow-hidden');
  } else {
    body[0].classList.remove('overflow-hidden');
  }
};
