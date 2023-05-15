# goit-js-hw-06

Завдання 1
HTML містить список категорій ul#categories.
<code>;
&lt;ul id="categories"&lt;
&lt;sli class="item"&lt;
&lt;h2&lt;Animals&lt;/h2&lt;
&lt;ul&lt;
&lt;li&lt;Cat&lt;/li&lt;
&lt;li&lt;Hamster&lt;/li&lt;
&lt;li&lt;Horse&lt;/li&lt;
&lt;li&lt;Parrot&lt;/li&lt;
&lt;ul&lt;
&lt;/li&lt;
&lt;li class="item"&lt;
&lt;h2&lt;Products&lt;/h2&lt;
&lt;ul&lt;
&lt;li&lt;Bread&lt;/li&lt;
&lt;li&lt;Prasley&lt;/li&lt;
&lt;li&lt;Cheese&lt;/li&lt;
&lt;/ul&lt;
&lt;/li&lt;
&lt;li class="item"&lt;
&lt;h2&lt;Technologies&lt;/h2&lt;
&lt;ul&lt;
&lt;li&lt;HTML&lt;/li&lt;
&lt;li&lt;CSS&lt;/li&lt;
&lt;li&lt;JavaScript&lt;/li&lt;
&lt;li&lt;React&lt;/li&lt;
&lt;li&lt;Node.js&lt;/li&lt;
&lt;/ul&lt;
&lt;/li&lt;
&lt;/ul&lt;
</code>;
Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу &lt;h2&lt;) і кількість елементів в категорії (усіх &lt;li&lt;, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

Завдання 2
HTML містить порожній список ul#ingredients.

&lt;ul id="ingredients"&lt;&lt;/ul&lt;

JavaScript містить масив рядків.

const ingredients = [
"Potatoes",
"Mushrooms",
"Garlic",
"Tomatos",
"Herbs",
"Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент &lt;li&lt;. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі &lt;li&lt; за одну операцію у список ul#ingredients.
Завдання 3
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

&lt;ul class="gallery"&lt;&lt;/ul&lt;

Використовуй масив об'єктів images для створення елементів &lt;img&lt;, вкладених в &lt;li&lt;. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const images = [
{
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
alt: "White and Black Long Fur Cat",
},
{
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
alt: "Orange and White Koi Fish Near Yellow Koi Fish",
},
{
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
alt: "Group of Horses Running",
},
];

Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
<code>
&lt;div id="counter"&lt;
&lt;button type="button" data-action="decrement"&lt;-1&lt;/button&lt;
&lt;span id="value"&lt;0&lt;/span&lt;
&lt;button type="button" data-action="increment"&lt;+1&lt;/button&lt;
&lt;/div&lt;
</code>
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
Завдання 5
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<code>
  &lt;input type="text" id="name-input" placeholder="Please enter your name" /&lt;
  &lt;h1&lt;Hello, &lt;span id="name-output"&lt;Anonymous&lt;/span&lt;!&lt;/h1&lt;
</code>

Завдання 6
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<code>
  &lt;input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
  /&lt;
</code>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
border: 3px solid #bdbdbd;
}

#validation-input.valid {
border-color: #4caf50;
}

#validation-input.invalid {
border-color: #f44336;
}

Завдання 7
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<code>
  &lt;input id="font-size-control" type="range" min="16" max="96" /&lt;
  &lt;br /&lt;
  &lt;span id="text"&lt;Abracadabra!&lt;/span&lt;
</code>

Завдання 8
Напиши скрипт управління формою логіна.

<code>
  &lt;form class="login-form"&lt;
  &lt;label&lt;
  Email
  &lt;input type="email" name="email" /&lt;
  &lt;/label&lt;
  &lt;label&lt;
  Password
  &lt;input type="password" name="password" /&lt;
  &lt;/label&lt;
  &lt;button type="submit"&lt;Login&lt;/button&lt;
  &lt;/form&lt;
</code>

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
Завдання 9
Напиши скрипт, який змінює кольори фону елемента &lt;body&lt; через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<code>
  &lt;div class="widget"&lt;
  &lt;p&lt;Background color: &lt;span class="color"&lt;-&lt;/span&lt;&lt;/p&lt;
  &lt;button type="button" class="change-color"&lt;Change color&lt;/button&lt;
  &lt;/div&lt;
</code>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

<code>
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
</code>

Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<code>
  &lt;div id="controls"&lt;
  &lt;input type="number" min="1" max="100" step="1" /&lt;
  &lt;button type="button" data-create&lt;Create&lt;/button&lt;
  &lt;button type="button" data-destroy&lt;Destroy&lt;/button&lt;
  &lt;/div&lt;
  
  &lt;div id="boxes"&lt;&lt;/div&lt;
</code>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки &lt;div&lt;, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого &lt;div&lt; - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
<code>
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
</code>

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
