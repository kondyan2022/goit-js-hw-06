let counterValue = 0;
const counterRef = document.querySelector('#counter');
const counterValueRef = counterRef.querySelector('#value');

const btnRef = counterRef.querySelectorAll('[data-action]');

const handleClick = event => {
  counterValue +=
    event.currentTarget.getAttribute('data-action') === 'increment' ? 1 : -1;
  counterValueRef.textContent = counterValue;
};

btnRef.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
