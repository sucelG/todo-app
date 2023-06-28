let addTodoBtn = document.getElementById("addTodoBtn");
let inputValue = document.getElementById("todoInput");

let addTodo = () => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("todoItem");

  let newHeading = document.createElement("h4");
  newHeading.classList.add("todoHeading");

  let newBtn = document.createElement("button");
  newBtn.classList.add("removeTodo");
  newBtn.innerHTML = "X";

  document.getElementById("wrapper").appendChild(newDiv);
  newDiv.appendChild(newHeading);
  newDiv.appendChild(newBtn);

  newHeading.innerHTML = inputValue.value;

  inputValue.value = null;

  newBtn.addEventListener("click", () => {
    newDiv.remove();
  });
};
