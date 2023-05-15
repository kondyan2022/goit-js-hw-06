const refs = {
  inputElm: document.querySelector('input#name-input'),
  outputElm: document.querySelector('span#name-output'),
};
const inputHandle = event => {
  refs.outputElm.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
};
refs.inputElm.addEventListener('input', inputHandle);
