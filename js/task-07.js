const refs = {
  rangeBtn: document.querySelector('input#font-size-control'),
  textSpan: document.querySelector('span#text'),
};

refs.rangeBtn.value = 16;

const inputHandle = event => {
  refs.textSpan.style.fontSize = `${event.currentTarget.value}px`;
};

refs.rangeBtn.addEventListener('input', inputHandle);
