// Get references to elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(); // Format date like 'MM/DD/YYYY'
    const time = now.toLocaleTimeString(); // Format time like 'HH:MM:SS AM/PM'
    return `${date} at ${time}`;
}

// Function to add a new task
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
        
        // Toggle completed status
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete task
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent triggering the click event on the list item
            li.remove();
        });

        todoList.appendChild(li);
        taskInput.value = "";  // Clear input field after adding task
    }
}

// Event listener for the "Add Task" button
addBtn.addEventListener('click', addTask);

// Optional: Allow pressing Enter key to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
