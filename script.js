// let choice = false; //По дефолту значение тру, меняем
// while (!choice) {
//    const invite = confirm('webcam?)')
//    if (invite) {
//       choice = true;
//       alert(`welcome to the team`)
//    }
// }


// const arr = [] //Создаем пустой массив
// while (true) {
//    const content = prompt("Full in the content"); //Заполнение
//    if (content === null) {
//       break;
//       } else if (content !== "") {
//          arr.push(content);
//    }
// }
// console.log(arr);


// const arr = []
// while (true) {
//    const content = prompt("full in the content");
//    if (content === null) {
//       break;
//    } else if (content !== "") {
//       arr[arr.length] = content;
//    }
// }
// console.log(arr);


// let i = 0
// while (true) {
//    i++
//    if (Math.random() >= 0.9) {
//       break;
//    }
// }
// alert(`Число больше 0.9 выпало через` + i + `попытки`);


// while (true) {
//    let input = prompt("Введіть значення:");
//    if (input === null) {
//       continue;
//    }
//    alert("Ви ввели: " + input);
//    break;
// }


// let arr = []
// let i;
// let n = +prompt("введите число");
// for (i = 1; i <= n; i += 3) {
//    arr.push(i);
// }
// console.log(arr);


// let length = +prompt("введите число"); // задаємо довжину рядка
// let result = ""; // створюємо пустий рядок
// for (let i = 0; i < length; i++) {
//    result += "#"; // додаємо символ "#" до рядка
// }
// console.log(result);


// let result = ""; // створюємо пустий рядок

// for (let i = 0; i < 10; i++) {
//    for (let j = 0; j < 10; j++) {
//       result += j;
//    }
//    result += "\n"; // додаємо символ переносу рядка
// }
// console.log(result); // виводимо результат в консоль


// let height = 3; // висота дошки
// let width = 5; // ширина дошки
// let result = ""; // створюємо пустий рядок
// for (let i = 0; i < height; i++) {
//    for (let j = 0; j < width; j++) {
//       if ((i + j) % 2 === 0) {
//          result += ".";
//       } else {
//          result += "#";
//       }
//    }
//    result += "\n"; // додаємо символ переносу рядка
// }
// console.log(result); // виводимо результат в консоль


// let n = prompt("Введіть кількість елементів масиву:"); // запитати користувача про кількість елементів
// let arr = []; // створюємо пустий масив
// for (let i = 0; i < n; i++) {
//    arr.push(Math.pow(i, 3)); // додаємо в масив куб поточного індексу
// }
// console.log(arr); // виводимо результат в консоль



// let size = 10; // розмір таблиці
// let arr = []; // створюємо пустий масив
// // заповнюємо масив масивів
// for (let i = 0; i < size; i++) {
//    arr[i] = []; // створюємо новий порожній масив у i-тому елементі
//    for (let j = 0; j < size; j++) {
//       arr[i][j] = (i + 1) * (j + 1); // заповнюємо значенням множенням поточних індексів
//    }
// }
// // виводимо масив масивів у вигляді таблиці
// for (let i = 0; i < size; i++) {
//    let row = "";
//    for (let j = 0; j < size; j++) {
//       row += arr[i][j] + "\t"; // додаємо значення розділені табуляцією
//    }
//    console.log(row); // виводимо поточний рядок у консоль
// }


// function readArrayOfObjects() {
//    const objects = [];
//    while (true) {
//       const object = {};
//       while (true) {
//          const key = prompt('Введіть ключ для об\'єкта');
//          if (key === null) {
//             break;
//          }
//          const value = prompt('Введіть значення для об\'єкта');
//          if (value === null) {
//             break;
//          }
//          object[key] = value;
//       }
//       objects.push(object);
//       const shouldContinue = confirm('Бажаєте продовжити введення об\'єктів?');
//       if (!shouldContinue) {
//          break;
//       }
//    }
//    return objects;
// }


// let size = 7; // задаємо розмір ромбіка
// let middle = Math.floor(size / 2); // знаходимо середину
// for (let i = 0; i < size; i++) { // цикл по рядках
//    let row = "";
//    let spaces = Math.abs(middle - i); // кількість пробілів на початку та в кінці рядка
//    for (let j = 0; j < spaces; j++) {
//       row += "."; // додаємо пробіли на початку рядка
//    }
//    let stars = size - 2 * spaces; // кількість зірочок у рядку
//    for (let j = 0; j < stars; j++) {
//       row += "#"; // додаємо зірочки у рядок
//    }
//    for (let j = 0; j < spaces; j++) {
//       row += "."; // додаємо пробіли в кінці рядка
//    }
//    console.log(row); // виводимо рядок
// }


// let table = document.createElement("table");
// for (let i = 1; i <= 10; i++) {
//    let row = document.createElement("tr");
//    for (let j = 1; j <= 10; j++) {
//       let cell = document.createElement("td");
//       cell.innerText = i * j;
//       row.appendChild(cell);
//    }
//    table.appendChild(row);
// }
// document.body.appendChild(table);


// let size = 10;
// let table = document.createElement('table');
// for (let i = 1; i <= size; i++) {
//    let row = document.createElement('tr');
//    for (let j = 1; j <= size; j++) {
//       let cell = document.createElement('td');
//       cell.innerText = i * j;
//       cell.addEventListener('mouseover', () => {
//          cell.classList.add('highlight');
//       });
//       cell.addEventListener('mouseout', () => {
//          cell.classList.remove('highlight');
//       });
//       row.appendChild(cell);
//    }
//    table.appendChild(row);
// }
// document.body.appendChild(table);


// Створення таблиці
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const numRows = 10;
const numCols = 10;
for (let i = 0; i < numRows; i++) {
   const row = document.createElement('tr');
   for (let j = 0; j < numCols; j++) {
      const cell = document.createElement('td');
      cell.innerText = (i + 1) * (j + 1);
      row.appendChild(cell);
   }
   tbody.appendChild(row);
}
// Додавання обробників подій
const cells = table.querySelectorAll('td');
cells.forEach(cell => {
   cell.addEventListener('mouseover', () => {
      // Підсвітити комірку
      cell.classList.add('highlight');
      // Підсвітити рядок
      const row = cell.parentElement;
      row.classList.add('highlight-row');
      // Підсвітити стовпець
      const colIndex = cell.cellIndex;
      const rows = table.rows;
      for (let i = 0; i < rows.length; i++) {
         rows[i].cells[colIndex].classList.add('highlight-col');
      }
   });
   cell.addEventListener('mouseout', () => {
      // Зняти підсвічування комірки
      cell.classList.remove('highlight');
      // Зняти підсвічування рядка
      const row = cell.parentElement;
      row.classList.remove('highlight-row');
      // Зняти підсвічування стовпця
      const colIndex = cell.cellIndex;
      const rows = table.rows;
      for (let i = 0; i < rows.length; i++) {
         rows[i].cells[colIndex].classList.remove('highlight-col');
      }
   });
});
