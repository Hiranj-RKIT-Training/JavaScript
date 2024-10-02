
// to add New item on pressing enter 
document.getElementById("addItemBar").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault(); // to prevent page from refreshing 
        addItem();
    }

});
// funtion to create new task design
function newTodoItem(text) {

    // created new Checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("form-check-input");
    checkbox.classList.add("chkBox");
    checkbox.addEventListener("change", function () {
        taskComplete(this);
    });
    // created task label
    let textNode = document.createElement("label");
    textNode.classList.add("lead");
    textNode.appendChild(document.createTextNode(text));
    // created delete Icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("material-symbols-outlined");
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.appendChild(document.createTextNode("delete"));
    deleteIcon.addEventListener("click", function () {
        deleteTask(this);
    })
    // creating divider
    let divider = document.createElement("hr")
    divider.classList.add("divider");
    // combining all in one div
    let newTask = document.createElement("div");
    newTask.classList.add("form-check");
    newTask.appendChild(checkbox);
    newTask.appendChild(textNode);
    newTask.appendChild(deleteIcon);
    newTask.appendChild(divider);
    return newTask
}
// function to delete task
deleteTask = function (item) {
    document.getElementById("removeToast").classList.toggle("show")
    item.parentElement.remove();
}

// function to toggle darkMode
darkMode = function () {
    let main = document.getElementById("main");
    main.classList.toggle("darkMode");
}

// function to mark task as completed
taskComplete = function (checkBox) {
    let taskLabel = checkBox.nextElementSibling;
    if (checkBox.checked) {
        taskLabel.classList.toggle("taskCompleted");
    } else {
        console.log("unChecked");
        taskLabel.classList.toggle("taskCompleted");
    }
}

//  funtion to add new task in the list 
function addItem() {
    let todoTask = document.getElementById("addItemBar").value;
    console.log(todoTask);
    if (todoTask != "") {
        document.getElementById("todo").appendChild(newTodoItem(todoTask));
    } else {
        window.alert("Write Something");
    }
    document.getElementById("addItemBar").value = "";
}


