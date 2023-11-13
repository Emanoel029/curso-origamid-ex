const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total; //Imprimindo na tela o total
  } else {
    console.log("Não é possível adcionar mais números!");
  }
}
if (botao) {
  botao.addEventListener("click", somar); //evento do botão
}
