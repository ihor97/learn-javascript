// Метод fetch дозволяє відстежувати хід завантаження.

// Будь ласка, зверніть увагу: наразі fetch не може відстежувати хід вивантаження.
// Для цієї мети використовуйте XMLHttpRequest, ми розглянемо його пізніше.

// замість response.json() та інших методів
// const reader = response.body.getReader();

// // нескінченний цикл, поки тіло відповіді завантажується
// while(true) {
//   // done стає true в останньому фрагменті
//   // value -- Uint8Array з байтів кожного фрагмента
//   const {done, value} = await reader.read();

//   if (done) {
//     break;
//   }

//   console.log(`Отримано ${value.length} байт`)
// }
/*
Щоб відстежувати хід завантаження, ми можемо використовувати властивість response.body. 
Це ReadableStream – спеціальний об’єкт, який надає тіло відповіді фрагментами, в міру надходження
*/

/*
На відміну від response.text(), response.json() та інших методів, 
response.body дає повний контроль над процесом зчитування,
 і ми можемо підрахувати, скільки даних отримано в будь-який момент.
*/

// Крок 1: починаємо завантаження fetch, отримуємо потік для зчитування
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');

const reader = response.body.getReader();

// Крок 2: отримуємо загальну довжину
const contentLength = +response.headers.get('Content-Length');

// Крок 3: зчитуємо дані
let receivedLength = 0; // кількість байтів, отриманих на даних момент
let chunks = []; // масив отриманих бінарних фрагментів (що складають тіло відповіді)
while(true) {
  const {done, value} = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Отримано ${receivedLength} з ${contentLength}`)
}

// Крок 4: об’єднуємо фрагменти в один Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for(let chunk of chunks) {
  chunksAll.set(chunk, position); // (4.2)
  position += chunk.length;
}

// Крок 5: декодуємо в рядок
let result = new TextDecoder("utf-8").decode(chunksAll);

// Готово!
let commits = JSON.parse(result);
alert(commits[0].author.login);

/*
Що робити, якщо нам потрібен результат у бінарному вигляді замість рядка? 
Це ще простіше. Замініть кроки 4 і 5 рядком, який створює Blob з усіх фрагментів:
let blob = new Blob(chunks);
*/ 
