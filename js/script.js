// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   break;
//   }
// }
// console.log(number)

//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;

// if (a === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

// console.log(a === 10 ? "Вірно" : "Невірно");

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = -50;

// if (min >= 0 && min <= 15) {
//   console.log("Це перша четверть години");
// } else if (min > 15 && min <= 30) {
//   console.log("Це друга четверть години");
// } else if (min > 30 && min <= 45) {
//   console.log("Це третя четверть години");
// } else if (min > 45 && min < 60) {
//   console.log("Це четверта четверть години");
// } else {
//   console.log("Невірна кількість хвилин");
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = -2;
// let result = "";

// switch (num){
//     case 1:
//     result = "зима";
//     break;

//     case 2:
//     result = "весна";
//     break;

//     case 3:
//         result = "літо";
//     break;

//     case 4:
//     result = "осінь";
//     break;

//     default:
//         result = "Такої пори року не існує";
// }

// console.log(result)

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let counter = 0;

// while (counter <= 50) {
//   console.log(counter);
//   counter += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('Яка «офіційна» назва JavaScript?').toLowerCase().trim();

// if(question === "ecmascript") {
//     alert ("Вірно!");
// } else {
//    alert("Не знаєте? ECMAScript!") ;
// }

// const question = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const globalMinutes = 70;
// const hours = Math.floor(globalMinutes / 60);
// const modificatedHours = String(hours).padStart(2,0);
// const minutes = globalMinutes % 60;
// const modificatedMinutes = String(minutes).padStart(2,0);

// console.log(`${modificatedHours}:${modificatedMinutes}`);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 10;
// const max = 60;
// let result = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     result += i;
//     console.log(i);
//   }
// }

// console.log(result);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt("Введіть свій логін");
// const login = "Адмін";
// const password = "Я головний";

// if (loginInput === login) {
//   const passwordInput = prompt("Введіть свій пароль");
//   if (passwordInput) {
//     if (passwordInput === password) {
//       alert("Добрий день!");
//     } else {
//       alert("Невірний пароль!");
//     }
//   } else {
//     alert("скасовано");
//   }
// } else {
//   alert("Я вас не знаю");
// }

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.


// let input;
// let total = 0;

// do {
//   input = prompt("Введіть число");

//   if (input === null) {
//     break;
//   }
//     input = Number(input);
//   total += input;
// } while (true);

// alert(`Загальна введена сума чисел дорінює ${total}`);



//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

//TODO: 14 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

//TODO: 15 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

//TODO: 16 ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];
console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);