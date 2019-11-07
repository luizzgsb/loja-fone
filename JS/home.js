let valorInicial = 10;

const $buttonSecond = document.querySelector(".-second");

$buttonSecond.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");

  //   valorInicial = valorInicial + 1;
  //   valorInicial += 1;
  //   valorInicial++;

  //   $carrinho.textContent = "Carrinho (" + ++valorInicial + ")";

  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
