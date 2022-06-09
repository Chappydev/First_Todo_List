const textField = document.getElementById("todo-name");
const createButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-ulist");

function resetUserText(textInputElement) {
  textInputElement = "";
}

createButton.addEventListener('click', () => {
  const userText = document.getElementById("todo-name").value;
  console.log(userText);
  // add check for blank text box and accompanying error

  resetUserText(userText);

  addNewTodo(userText);
})