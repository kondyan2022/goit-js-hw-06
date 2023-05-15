const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector('ul#ingredients').append(
  ...ingredients.reduce((a, b) => {
    const element = document.createElement('li');
    element.className = 'item';
    element.textContent = b;
    a.push(element);
    return a;
  }, [])
);
