/*
1 - Ter a janela (browser) na mão => ok
2 - Ter o html na mão => ok
3 - Pegar o coração => ok
4 - Pegar clique no coração
5 - No momento que o usuario clicar, nos queremos mostrar um texto AE
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}

const $buttonSecond = window.document.querySelector(".-second");

$buttonSecond.addEventListener("click", handleClickButton);

function handleClickButton() {
  console.log("Botão");
  $buttonSecond.firstChild.nodeValue = "Adicionado";
}
