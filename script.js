// За допомогою наведених нижче методів ми можемо змінювати поля в об’єкті FormData:

// formData.append(name, value) – додає до об’єкта поле з іменем name і значенням value,
// formData.append(name, blob, fileName) – додає поле так, ніби це <input type="file">, третій аргумент fileName встановлює ім’я файлу (не ім’я поля форми), ніби це ім’я з файлової системи користувача,
// formData.delete(name) – видаляє поле по заданому name,
// formData.get(name) – дістає значення поля по заданому name,
// formData.has(name) – перевіряє чи існує поле по заданому name, повертає true, інакше false

// Ще існує метод set, його синтаксис такий самий, як у append. Різниця в тому, що 
// .set видаляє всі наявні поля з ім’ям name і тільки потім додає нове. Тобто цей метод гарантує, 
// що існуватиме лише одне поле з ім’ям name, у всьому іншому він аналогічний .append:


let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Список пар ключ/значення
for(let [name, value] of formData) {
  alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
}


