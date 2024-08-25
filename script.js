let boton = document.querySelector("button");
let texto = document.getElementById("texto");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    addValue(); 
});

function addValue(){
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto.value;
    lista.appendChild(nuevoElemento);
}
