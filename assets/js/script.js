let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

function createTaskHandler(event) {
    event.preventDefault();
    let taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(taskItemEl);
};

formEl.addEventListener("submit", createTaskHandler);