
// Lê os valores de Entrada:
const valorSalario = parseFloat(prompt(1500));
const valorBeneficios = parseFloat(prompt(600));

// Calcule o imposto atraves da função "calculeImposto":
const valorImposto = calcularImposto(valorSalario);
// Calcule e imprime a Saida (com 2 casa decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
console.log(saida.toFixed(2));

// Função util para o calculo do imposto (baseada nas aliquotas).
function calcularImposto(salario) {
  let aliquota;
  if (salario >= 0 && salario <= 1100) {
    aliquota = 0.05;
  }
  else if (salario >= 1100.01 && salario <= 2500) {
    aliquota = 0.10;
  }
  else {
    aliquota = 0.15;
  }

  return aliquota * salario;
}



