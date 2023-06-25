/*
Є загальний термін “AJAX” (абревіатура від Asynchronous JavaScript And XML) для мережевих запитів від JavaScript коду.
Але формат XML використовувати не обов’язково: цей термін застарілий, тому це слово (XML) тут. 

Базовий синтаксис:

let promise = fetch(url, [options])
options – додаткові параметри: метод, заголовки і т.д.

Процес отримання запиту зазвичай відбувається у два етапи.

По-перше, promise завершиться із об’єктом вбудованого класу Response у якості результату,
 одразу коли сервер надішле заголовки відповіді.

На цьому етапі можна перевірити статус HTTP-запиту, та визначити, чи виконався він успішно, а
також переглянути заголовки, але покищо без тіла запиту.

Проміс закінчується помилкою, якщо fetch не зміг виконати HTTP-запит, наприклад,
 через помилку мережі або, якщо такого сайту не існує. Ненормальні HTTP-статуси, як 404 та 500, не викликатимуть помилку.

Ми можемо побачити HTTP-статус у властивостях відповіді:

status – код статуса HTTP-запиту, наприклад, 200.
ok – логічне значення, котре буде true, якщо код HTTP-статосу в діапазоні 200-299.
*/

{
    // let response = await fetch(url);

    // if (response.ok) { // якщо HTTP-статус у діапазоні 200-299
    //     // отримання тіла запиту (див. про цей метод нижче)
    //     let json = await response.json();
    // } else {
    //     alert("HTTP-Error: " + response.status);
    // }
}

/*
Response надає декілька методів, які повертають проміс, для доступу до тіла запиту в різних форматах:
response.text() – читає відповід та повертає, як звичайний текст,
response.json() – декодує відповідь у форматі JSON,
response.formData() – повертає відповідь, як об’єкт FormData (він буде розглянутий у наступному розділі),
response.blob() – повертає відповідь, як Blob (бінарні дані з типом),
response.arrayBuffer() – повертає відповідь, як [ArrayBuffer](інформація:
буфер масиву – бінарний масиви) (низькорівневе представлення двійкових даних),
крім того, response.body це об’єкт ReadableStream, 
за допомогою якого можна отримувати (зчитувати) тіло відповіді частинами. Такий приклад буде розглянуто трохи пізніше.

*/

{
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// async function handle() {
    
//     let response = await fetch(url);
    
//     let commits = await response.json(); // read response body and parse as JSON

//     alert(commits[0].author.login);
// }

// handle()
}
/*
Для прикладу роботи із бінарними даними, буде зроблено запит 
та виведено на екран логотип специфікації 
“fetch” (див. розділ Blob, щоб дізнатись детальніше про операції із Blob):
*/ 
{
//     let img
// async function handle() {
    
//     let response = await fetch('/article/fetch/logo-fetch.svg');
    
//     let blob = await response.blob(); // скачати, як Blob об'єкт
//     nextFunction(blob)
// }

// function nextFunction(blob){
//     // створення <img> для нього
//      img = document.createElement('img');
//     img.style = 'position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);

//     // виведення на екран
//     img.src = URL.createObjectURL(blob);
// }
// handle()

// setTimeout(() => { // приховування через три секунди
//   img.remove();
//   URL.revokeObjectURL(img.src);
// }, 3000);
}

/*
Заголовки відповіді
Заоголовки відповіді зберігаются у схожому на Map об’єкті response.headers.
*/ 
// {
//    async function handle() {
        
//         let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
//         // отримання одного заголовку
//         alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
        
//         // перебір усіх заголовків
//         for (let [key, value] of response.headers) {
//           alert(`${key} = ${value}`);
//         }
//     }
//     handle()

// }

/*
Заголовки запиту
Для встановлення заголовка запиту в fetch, можна використати властивість headers в об’єкті options.
 Вона містит об’єкт з вихідними заголовками, наприклад:

let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
*/ 

/*
Для відправлення POST запиту або запиту з іншим методом, треба використати fetch параметри:

method – HTTP-метод, наприклад POST,
body – тіло запиту, щось одне із списку:
рядок (наприклад, у форматі JSON),
об’єкт FormData, для відправки даних як multipart/form-data,
Blob/BufferSource для відправлення бінарних даних,
URLSearchParams, для відправлення даних у кодуванні x-www-form-urlencoded, використовуєся рідко.
Частіше використовуєся JSON формат.

let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

Зверніть увагу, якщо тіло запиту body – рядок, то заголовок Content-Type типово буде text/plain;charset=UTF-8 .

Але, оскільки ми надсилаємо дані у форматі JSON, то через headers ми маємо встановити значення application/json –
 правильний Content-Type для JSON формату.
*/ 



/*
Підсумки
иповий запит за допомогою fetch складаєся із двох операторів await:

let response = await fetch(url, options); // завершення із заголовками відповіді
let result = await response.json(); // читання тіла у форматі json
Або без await:

fetch(url, options)

  .then(response => response.json())
  .then(result => /* process result )
  Параметри відповіді:

  response.status – HTTP-статус відповіді,
  response.ok – true, якщо статус відповіді у діапазоні 200-299.
  response.headers – схожий на Mapоб’єкт із HTTP заголовками.
  Методи для отримання тіла відповіді:
  
  response.text() – повертає відповід, як звичайний текст,
  response.json() – декодує відповідь у форматі JSON,
  response.formData() – повертає відповідь як об’єкт FormData (кодування multipart/form-data, див. у наступному розділі),
  response.blob() – повертає об’єкт як Blob (бінарні дані з типом),
  response.arrayBuffer() – повертає відповідь як ArrayBuffer (низько рівневі бінарні дані),
  Опції fetch, які ми розглянули:
  
  method – HTTP-метод,
  headers – об’єкт із заголовками запиту (не всі заголовки дозволені),
  body – дані для відправлення (тіло запиту) у вигляді тексту string, FormData, BufferSource, Blob або UrlSearchParams об’єкт.
*/ 