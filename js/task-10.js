function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls>input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
let size = 30;
refs.boxes.style.display = 'flex';
refs.boxes.style.flexWrap = 'wrap';

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    elements.push(element);
    size += 10;
  }
  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  size = 30;
}

refs.createBtn.addEventListener('click', event => {
  createBoxes(Number(refs.input.value));
});

refs.destroyBtn.addEventListener('click', event => {
  destroyBoxes();
});
