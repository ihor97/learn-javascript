// Раніше у главі Fetch ми бачили, що дуже легко відправити динамічно згенеровані бінарні 
// дані у форматі Blob. Ми можемо явно передати їх до параметра body запиту fetch.

// Але на практиці буває зручніше відправляти зображення не окремо, а у складі форми, 
// додавши додаткові поля для імені та інші метадані.

// Крім того, сервери часто налаштовані на приймання саме форм, а не просто бінарних даних.

canvasElem.onmousemove = function(e) {
  let ctx = canvasElem.getContext('2d');
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
};

async function submit() {
  let imageBlob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));

  let formData = new FormData();
  formData.append("firstName", "John");
  formData.append("image", imageBlob, "image.png");

  let response = await fetch('/article/formdata/post/image-form', {
    method: 'POST',
    body: formData
  });
  let result = await response.json();
  alert(result.message);
}
