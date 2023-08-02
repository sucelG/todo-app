let addTodoBtn = document.getElementById("addTodoBtn");
let inputValue = document.getElementById("todoInput");

let addTodo = () => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("todoItem");

  let newHeading = document.createElement("h4");
  newHeading.classList.add("todoHeading");

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("removeTodo");
  removeBtn.innerHTML = "Remove";

  let doneBtn = document.createElement("button");
  doneBtn.classList.add("doneTodo");
  doneBtn.innerHTML = "done";

  document.getElementById("wrapper").appendChild(newDiv);
  newDiv.appendChild(newHeading);
  newDiv.appendChild(removeBtn);
  newDiv.appendChild(doneBtn);
  newHeading.innerHTML = inputValue.value;
  inputValue.value = null;

  removeBtn.addEventListener("click", () => {
    newDiv.remove();
  });

  doneBtn.addEventListener("click", function myFun() {
    newHeading.classList.toggle("doneTodoHeading");
    doneBtn.style.cursor = "initial";
    doneBtn.removeEventListener("click", myFun);
  });
};
