// créer un form pour taper les todos
// ajouter sur le dom ce qui est tapé dans le form à la validation du form (monInput.value)
//supprimer un  todo lorsque l'on click dessus (.remove())
//stoker dans le local storage de la liste
// consulter le local storage au lancement de l'app pour rajouter des todos
const form = document.querySelector("form");
const body = document.querySelector("body");
const input = document.querySelector("input");
const todo = document.querySelector(".todolist");

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //create Li + button
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `<p><i class="fa-solid fa-star-of-life"></i>${input.value}<i id="delete"m class="fa-solid fa-trash"></i></p>`;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add to list
    todo.appendChild(todoDiv);
    //delete div on click
    todoDiv.addEventListener("click", () => {
      todoDiv.remove();
    });
    //prevent default and empty the form
    e.preventDefault();
    input.value = "";
  }
});
