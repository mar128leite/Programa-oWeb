const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));


if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
   
    if (lado1 === lado2 && lado1 === lado3) {
        alert("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("O triângulo é isósceles.");
    } else {
        alert("O triângulo é escaleno.");
    }
} else {
  
    alert("Os comprimentos informados não formam um triângulo válido.");
}
