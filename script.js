// Якщо передати в конструктор елемент HTML-форми form, то об’єкт, що створюється,
//  автоматично прочитає з неї поля.

// Його особливість полягає в тому, що методи для роботи з мережею, наприклад, fetch
// , дозволяють вказати об’єкт FormData у властивості тіла запиту body.


// let formData = new FormData([form]);

let formElem=document.getElementById('formElem')

formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('/article/formdata/post/user', {
    method: 'POST',
    body: new FormData(formElem)
  });

  let result = await response.json();

  alert(result.message);
};
