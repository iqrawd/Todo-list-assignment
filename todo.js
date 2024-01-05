
const taskInput = document.getElementById("input-box");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("list-container");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});


function createTask(text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete">Remove</button>
    `;
    taskList.appendChild(taskItem);


    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}