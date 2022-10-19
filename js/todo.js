const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    // (toDoInput.value);
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);