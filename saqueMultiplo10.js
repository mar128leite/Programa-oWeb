const valorSaque = parseInt(prompt("Digite o valor que deseja sacar:"));


if (valorSaque % 10 === 0) {
   
    alert("Saque realizado com sucesso");
} else {
   
    alert("Valor inválido. Digite um valor múltiplo de 10");
}
