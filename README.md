# goit-js-hw-06

Завдання 1
HTML містить список категорій ul#categories.
<code>
&lt;ul id="categories"&gt;
&lt;sli class="item"&gt;
&lt;h2&gt;Animals&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;Cat&lt;/li&gt;
&lt;li&gt;Hamster&lt;/li&gt;
&lt;li&gt;Horse&lt;/li&gt;
&lt;li&gt;Parrot&lt;/li&gt;
&lt;ul&gt;
&lt;/li&gt;
&lt;li class="item"&gt;
&lt;h2&gt;Products&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;Bread&lt;/li&gt;
&lt;li&gt;Prasley&lt;/li&gt;
&lt;li&gt;Cheese&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li class="item"&gt;
&lt;h2&gt;Technologies&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;HTML&lt;/li&gt;
&lt;li&gt;CSS&lt;/li&gt;
&lt;li&gt;JavaScript&lt;/li&gt;
&lt;li&gt;React&lt;/li&gt;
&lt;li&gt;Node.js&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</code>
Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу &lt;h2&gt;) і кількість елементів в категорії (усіх &lt;li&gt;, вкладених в нього).
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

<code>&lt;ul id="ingredients"&gt;&lt;/ul&gt;</code>

JavaScript містить масив рядків.

<code>
  const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
  ];
</code>

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент &lt;li&gt;. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі &lt;li&gt; за одну операцію у список ul#ingredients.
Завдання 3
Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

<code>&lt;ul class="gallery"&gt;&lt;/ul&gt;</code>

Використовуй масив об'єктів images для створення елементів &lt;img&gt;, вкладених в &lt;li&gt;. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
<code>
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
</code>

Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<code>
  &lt;div id="counter"&gt;
  &lt;button type="button" data-action="decrement"&gt;-1&lt;/button&gt;
  &lt;span id="value"&gt;0&lt;/span&gt;
  &lt;button type="button" data-action="increment"&gt;+1&lt;/button&gt;
  &lt;/div&gt;
</code>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
Завдання 5
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

<code>
  &lt;input type="text" id="name-input" placeholder="Please enter your name" /&gt;
  &lt;h1&gt;Hello, &lt;span id="name-output"&gt;Anonymous&lt;/span&gt;!&lt;/h1&gt;
</code>

Завдання 6
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<code>
  &lt;input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
  /&gt;
</code>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

<code>
  #validation-input {
  border: 3px solid #bdbdbd;
  }
  
  #validation-input.valid {
  border-color: #4caf50;
  }
  
  #validation-input.invalid {
  border-color: #f44336;
  }
</code>

Завдання 7
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<code>
  &lt;input id="font-size-control" type="range" min="16" max="96" /&gt;
  &lt;br /&gt;
  &lt;span id="text"&gt;Abracadabra!&lt;/span&gt;
</code>

Завдання 8
Напиши скрипт управління формою логіна.

<code>
  &lt;form class="login-form"&gt;
  &lt;label&gt;
  Email
  &lt;input type="email" name="email" /&gt;
  &lt;/label&gt;
  &lt;label&gt;
  Password
  &lt;input type="password" name="password" /&gt;
  &lt;/label&gt;
  &lt;button type="submit"&gt;Login&lt;/button&gt;
  &lt;/form&gt;
</code>

Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
Завдання 9
Напиши скрипт, який змінює кольори фону елемента &lt;body&gt; через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

<code>
  &lt;div class="widget"&gt;
  &lt;p&gt;Background color: &lt;span class="color"&gt;-&lt;/span&gt;&lt;/p&gt;
  &lt;button type="button" class="change-color"&gt;Change color&lt;/button&gt;
  &lt;/div&gt;
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
  &lt;div id="controls"&gt;
  &lt;input type="number" min="1" max="100" step="1" /&gt;
  &lt;button type="button" data-create&gt;Create&lt;/button&gt;
  &lt;button type="button" data-destroy&gt;Destroy&lt;/button&gt;
  &lt;/div&gt;
  
  &lt;div id="boxes"&gt;&lt;/div&gt;
</code>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки &lt;div&gt;, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого &lt;div&gt; - 30px на 30px.
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
