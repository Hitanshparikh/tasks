// Function to assign a task
function assignTask() {
    const taskName = document.getElementById('taskName').value;
    const assignedGroup = document.getElementById('assignedGroup').value;
    const dueDate = document.getElementById('dueDate').value;

    // Create a task object
    const task = {
        name: taskName,
        group: assignedGroup,
        dueDate: dueDate
    };

    // Save the task to the GitHub repository
    saveTaskToGitHub(task);

    // Fetch and display tasks
    fetchTasksFromGitHub();
}

// Function to save a task to the GitHub repository
function saveTaskToGitHub(task) {
    // You would typically use a GitHub API or some server-side logic to update the file on GitHub.
    // This example is simplified and does not handle authentication.

    const tasksText = `Name: ${task.name}, Group: ${task.group}, Due: ${task.dueDate}`;
    
    // Assume "tasks.txt" is the file in your GitHub repository
    const githubUrl = 'https://github.com/Hitanshparikh/tasks/blob/main/tasks.txt';

    // Fetch the current content of the file
    fetch(githubUrl)
        .then(response => response.text())
        .then(existingContent => {
            // Append the new task to the existing content
            const updatedContent = `${existingContent}\n${tasksText}`;

            // Update the file on GitHub
            fetch(githubUrl, {
                method: 'PUT',
                body: updatedContent
            })
            .then(response => console.log('Task saved to GitHub'))
            .catch(error => console.error('Error updating file on GitHub:', error));
        })
        .catch(error => console.error('Error fetching file from GitHub:', error));
}

// Function to fetch and display tasks from the GitHub repository
function fetchTasksFromGitHub() {
    // You would typically use a GitHub API or some server-side logic to retrieve the file content.
    // This example is simplified and does not handle authentication.

    // Assume "tasks.txt" is the file in your GitHub repository
    const githubUrl = 'https://github.com/Hitanshparikh/tasks/blob/main/tasks.txt';

    // Fetch the content of the file
    fetch(githubUrl)
        .then(response => response.text())
        .then(content => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear previous tasks

            // Split the content into tasks
            const tasks = content.split('\n');

            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = task;
                taskList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching file from GitHub:', error));
}

// Fetch tasks when the page loads
window.onload = fetchTasksFromGitHub;
