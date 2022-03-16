/*
 1. A TODO APP
  > Should be able to create a list of todos.
  > Should be able to delete a single todo.
  > Should be able to mark the todo as done.
*/

const todoInput = document.querySelector("#todo-input");
const todosContainer = document.querySelector("#todos-container");
const todoCreateButton = document.querySelector("#todo-create-button");
const createTodo = () => {
  todoCreateButton.addEventListener("click", () => {
    let todo = todoInput.value;
    if (todo.trim() === "") {
      alert("Please enter a todo");
      return;
    }
    let todoLi = document.createElement("li");
    todoLi.innerText = todo;
    todosContainer.appendChild(todoLi);
    console.log(todoInput.value);
    todoInput.value = "";
  });

  // return todo;
};

createTodo();
