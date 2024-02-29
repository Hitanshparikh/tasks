// Function to assign a task
function assignTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const assignedGroup = document.getElementById('assignedGroup').value;
    const dueDate = document.getElementById('dueDate').value;

    // Create a task object
    const task = {
        name: taskName,
        description: taskDescription,
        group: assignedGroup,
        dueDate: dueDate
    };

    // Save the task to local storage
    saveTask(task);

    // Fetch and display tasks
    fetchTasks();
}

// Function to save a task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to fetch and display tasks
function fetchTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous tasks

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${task.name} <br>
            <strong>Description:</strong> ${task.description} <br>
            <strong>Group:</strong> ${task.group} <br>
            <strong>Due:</strong> ${task.dueDate}
        `;
        taskList.appendChild(listItem);
    });
}

// Fetch tasks when the page loads
window.onload = fetchTasks;
