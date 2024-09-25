
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

addTaskButton.addEventListener("click", function () {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "clear item🤦";
        deleteButton.classList.add("delete-button");
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task deleted");
    }
});