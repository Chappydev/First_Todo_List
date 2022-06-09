const textField = document.getElementById("todo-name");
const createButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-ulist");

function getUserText() {

}

createButton.addEventListener('click', () => {
  const userText = getUserText();

  resetUserText();

  addNewTodo();
})