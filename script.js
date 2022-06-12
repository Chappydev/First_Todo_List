const textField = document.getElementById("todo-name");
const createButton = document.getElementById("create-todo");
const todoList = document.getElementById("todo-ulist");
let savedTodos = JSON.parse(localStorage.getItem("savedTodos")) || [];
savedTodos.forEach(addNewTodo);

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
  // Add delete event listener to all deleteButtons
  addDeleteOnClick(newTodoDelete, title);
}

function resetUserText(textInputElement) {
  textInputElement.value = "";
}

createButton.addEventListener('click', () => {
  const textField = document.getElementById("todo-name")
  const userText = document.getElementById("todo-name").value;
  // ***add check for blank text box and accompanying error
  if (textField.validity.valueMissing) {
    textField.setCustomValidity("This field is required");
    textField.reportValidity();
  } else if (textField.validity.tooLong) {
    textField.setCustomValidity("Your To-do must be no more than 25 characters");
    textField.reportValidity();
  } else if (savedTodos.includes(userText)) {
    textField.setCustomValidity("Sorry, you can only have one task with the same title");
    textField.reportValidity();
  } else {
    textField.setCustomValidity("");

    addNewTodo(userText);

    // add new todo to the localStorage
    savedTodos.push(userText);
    localStorage.setItem("savedTodos", JSON.stringify(savedTodos));

    resetUserText(textField);
  }

})

function addDeleteOnClick(btn, txt) {
  btn.addEventListener('click', (e) => {
    const parentTodo = btn.parentNode;
    parentTodo.remove();
    savedTodos = savedTodos.filter((e) => e !== txt)
    localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
  })
}