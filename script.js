let ul = document.getElementById("todos");
let button = document.getElementById("enter");
let userInput = document.getElementById("userinput");

function deleteTask(evt){
    evt.target.removeEventListener("click", deleteTask, false);
    evt.target.parentNode.remove();
}
function userInputLength(){
   return userInput.value.length;
}

function getEventTarget (evt){
    this.event;
    return evt.target;
}
ul.onclick = function(event){
    let target = getEventTarget(event);
    target.classList.toggle("done");
}

function createTask(){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(userInput.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(deleteButton);
    deleteButton.onclick = deleteTask;
    ul.appendChild(li);
    userInput.value = "";
    
}

function addTaskAfterKeypress(evt){
    if (userInputLength() > 0 && evt.which === 13){
        createTask();
    }
}

function addTaskAfterClick(){
    if (userInputLength() > 0){
        createTask();

    }
}

button.addEventListener("click", addTaskAfterClick);
userInput.addEventListener("keypress", addTaskAfterKeypress);
