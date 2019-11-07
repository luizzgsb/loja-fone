/*
1 - Ter a janela (browser) na mão => ok
2 - Ter o html na mão => ok
3 - Pegar o coração => ok
4 - Pegar clique no coração => ok
5 - No momento que o usuario clicar, nos queremos mostrar um texto AE => ok
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  // if ($heart.classList.contains("-active")) {
  //   $heart.classList.remove("-active"); //quando tem a class active
  // } else {
  //   $heart.classList.add("-active"); //qaundo nao tem a classe active
  // }

  $heart.classList.toggle("-active");
}
