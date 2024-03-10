numeroSecreto = 4;
chute = 0;

while (chute != numeroSecreto) {
  chute = prompt("Insira um numero");
  if (chute == numeroSecreto) {
  alert("Parabéns, você acertou!");
  } else if (chute > numeroSecreto) {
    alert("Errou. Seu chute foi maior");
  } else {
    alert("Errou. seu chute foi menor");
  }
}
