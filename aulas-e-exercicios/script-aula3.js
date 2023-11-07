const menu = document.querySelector(".menu");

// menu.className; //string
// menu.classList; //lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile');//duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo');//adiciona/remove a classe
// menu.classList.contains('ativo');// true e false
// menu.classList.replace('ativo');

console.log(menu.className);

const animais = document.querySelector(".animais");

console.log(animais.attributes[0]);

const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");

img.setAttribute("alt", "É uma raposa");

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (Km) {
    console.log(`Andou ${Km}`);
  },
};
