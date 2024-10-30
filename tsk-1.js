// Знаходимо елементи
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Функція для додавання завдання
function addTask() {
    // Створюємо новий елемент списку
    const newTask = document.createElement('li');
    newTask.textContent = "Нове завдання";

    // Створюємо кнопку для видалення
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити завдання";
    deleteButton.addEventListener('click', () => {
        newTask.remove();
    });

    // Додаємо кнопку видалення до завдання
    newTask.appendChild(deleteButton);

    // Додаємо нове завдання в кінець списку
    taskList.appendChild(newTask);
}

// Додаємо обробник подій до кнопки додавання завдання
addTaskButton.addEventListener('click', addTask);
