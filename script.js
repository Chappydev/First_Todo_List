const textField = document.getElementById("todo-name");
const createButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-ulist");

function addNewTodo(title) {
  // create new <li> element and <button>
  const newTodo = document.createElement("li");
  const newTodoDelete = document.createElement("button");
  // append appropriate stuff to delete button
  newTodoDelete.className = "delete-todo";
  newTodoDelete.type = "button";
  newTodoDelete.innerText = "X";
  // assign class to <li>
  newTodo.className = "todo-item";
  // append user-created title to the <li> element
  newTodo.innerText = title;
  // append delete button to the <li> element
  newTodo.appendChild(newTodoDelete);
  // locate the new <li> at the end of the todo list
  todoList.appendChild(newTodo);

}

function resetUserText(textInputElement) {
  textInputElement.value = "";
}

createButton.addEventListener('click', () => {
  const userText = document.getElementById("todo-name").value;
  console.log(userText);
  // ***add check for blank text box and accompanying error

  addNewTodo(userText);

  resetUserText(textField);
})