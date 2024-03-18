const div = document.querySelector("#div");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    div.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    div.classList.remove("visible");
})