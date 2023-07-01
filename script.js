// Об’єкти FormData завжди посилаються із заголовком Content-Type: multipart/form-data, 
// цей спосіб кодування дозволяє надсилати файли. Таким чином, 
// поля <input type="file"> теж відправляються, як і при використанні разі звичайної форми.


let formElem=document.getElementById('formElem')

formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('/article/formdata/post/user-avatar', {
    method: 'POST',
    body: new FormData(formElem)
  });

  let result = await response.json();

  alert(result.message);
};