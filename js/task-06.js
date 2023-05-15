const ref = document.querySelector('#validation-input');

const blurHandle = event => {
  const element = event.currentTarget;
  if (element.value.length == element.getAttribute('data-length')) {
    element.classList.add('valid');
  } else element.classList.add('invalid');
};

const focusHandle = event => {
  event.currentTarget.classList.remove('valid', 'invalid');
};

ref.addEventListener('blur', blurHandle);
ref.addEventListener('focus', focusHandle);
