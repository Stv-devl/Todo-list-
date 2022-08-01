// créer un form pour taper les todos
// ajouter sur le dom ce qui est tapé dans le form à la validation du form (monInput.value)
//supprimer un  todo lorsque l'on click dessus (.remove())
//stoker dans le local storage de la liste
// consulter le local storage au lancement de l'app pour rajouter des todos
const form = document.querySelector("form");
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
