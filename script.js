const textField = document.getElementById("todo-name");
const createButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-ulist");

function getUserText(textInputElement) {
  return textInputElement.innerText;
}

function resetUserText(textInputElement) {
  textInputElement.innerHTML = "";
}

createButton.addEventListener('click', () => {
  const userText = getUserText(textField);
  // add check for blank text box and accompanying error

  resetUserText();

  addNewTodo(userText);
})