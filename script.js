function assignTask() {
    // Frontend logic for task assignment (as before)
    // ...

    // After assigning a task, fetch and display tasks
    fetchTasks();
}

// Function to fetch and display tasks
function fetchTasks() {
    fetch('tasks.php')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear previous tasks

            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = `${task.name} - Group: ${task.group} - Due: ${task.dueDate}`;
                taskList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Fetch tasks when the page loads
window.onload = fetchTasks;
