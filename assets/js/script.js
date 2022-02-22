let buttonE1 = document.querySelector("#save-task")
let tasksToDoEl = document.querySelector("#tasks-to-do");

function createTaskHandler() {
    let taskItemE1 = document.createElement("li");
    taskItemE1.className = "task-item";
    taskItemE1.textContent = "This is a new task.";
    tasksToDoEl.appendChild(taskItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);