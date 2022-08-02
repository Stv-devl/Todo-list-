// créer un form pour taper les todos
// ajouter sur le dom ce qui est tapé dans le form à la validation du form (monInput.value)
//supprimer un  todo lorsque l'on click dessus (.remove())
//stoker dans le local storage de la liste
// consulter le local storage au lancement de l'app pour rajouter des todos
const form = document.querySelector("form");
const body = document.querySelector("body");
const input = document.querySelector("input");
const todo = document.querySelector(".todo1");
const span = document.querySelector("span");

/*
const inputChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 80)) {
    span.innerHTML = `You have to write something`;
    toDo = null;
  } else {
    toDo = value;
  }
};*/

document.addEventListener("keypress", (e) => {
  console.log(input.value);
  if (e.key == "Enter") {
    todo.innerHTML = `${input.value}`;
    e.preventDefault();
  }
});

/*
document.addEventListener("input", (e) => {
  input.value == todo;
  document.todo.innerHTML = "todo";
});
*/
