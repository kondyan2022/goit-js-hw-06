function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeBtn: document.querySelector('button.change-color'),
  colorSpan: document.querySelector('span.color'),
  body: document.querySelector('body'),
};

const clickHandle = event => {
  const color = getRandomHexColor();
  refs.colorSpan.textContent = color;
  refs.body.style.backgroundColor = color;
};

refs.changeBtn.addEventListener('click', clickHandle);
