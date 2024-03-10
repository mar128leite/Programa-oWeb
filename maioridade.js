const dataNascimento = prompt("Digite sua data de nascimento no formato DD-MM-YYYY:");

const hoje = new Date();

const diaAtual = hoje.getDate();
const anoAtual = hoje.getFullYear();
const mesAtual = hoje.getMonth() + 1;

const partesDataNascimento = dataNascimento.split("-");
const anoNascimento = parseInt(partesDataNascimento[0]);
const mesNascimento = parseInt(partesDataNascimento[1]);
const diaNascimento = parseInt(partesDataNascimento[2]);

let idade = anoAtual - anoNascimento;

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
}
