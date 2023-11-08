
const taskInput = document.getElementById('taskInput');
    
 const addTaskButton = document.getElementById('addTaskButton');
    
 const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
       const taskText = taskInput.value.trim();

        if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completato';
        completeButton.addEventListener('click', function () {
          taskItem.classList.add('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Elimina';
        deleteButton.addEventListener('click', function () {
          taskItem.remove();
        });

        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';
       }
    });