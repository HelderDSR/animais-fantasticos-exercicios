const listaAnimais = document.querySelector(".animais-lista");

//Mostrar o tamanho da página com o scroll
const height = listaAnimais.scrollHeight;
console.log(height);

//offsetTop e offsetLeft
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;

console.log(h2left);

//getBoundingClienteRect() é um método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const section = document.querySelector(".animais");

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect);

if (h2rect.top < 0) {
  console.log("Passou do elemento");
}

//Window
console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight
);

//matchMedia()
const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}
