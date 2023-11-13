const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adcionar mais números!");
  }
}

botao.addEventListener("click", somar);
