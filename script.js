const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    return `${date} at ${time}`;
}


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        
        const timestamp = getCurrentDateTime();
        
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="timestamp">${timestamp}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

      
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            li.remove();
        });

        todoList.appendChild(li);
        taskInput.value = "";  
    }
}


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
