
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


function addTask() {
    
    const newTask = document.createElement('li');
    newTask.textContent = "Нове завдання";

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити завдання";
    deleteButton.addEventListener('click', () => {
        newTask.remove();
    });

    
    newTask.appendChild(deleteButton);

    
    taskList.appendChild(newTask);
}


addTaskButton.addEventListener('click', addTask);
