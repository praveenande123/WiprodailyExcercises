function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

   
    let li = document.createElement("li");
    li.innerText = taskValue;

   
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    
    li.appendChild(deleteBtn);

   
    taskList.appendChild(li);

    taskInput.value = "";
}
