const refs = {
  form: document.querySelector('form.login-form'),
};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
};

refs.form.addEventListener('submit', handleSubmit);
