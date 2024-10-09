const input = require("prompt-sync")();

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let codigo = 0;

while (codigo !== 4) {
  codigo = Number(input("Digite o código (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim:) "));

  if (codigo === 1) {
    alcool++;
  } else if (codigo === 2) {
    gasolina++;
  } else if (codigo === 3) {
    diesel++;
  } else if (codigo !== 4) {
    console.log("Código inválido! Tente novamente.");
  }
}

console.log("MUITO OBRIGADO");
console.log("Álcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);


/* 
Operadores de comparação em Javascript

| Operador | Operação                     | Exemplo            |
|----------|------------------------------|--------------------|
| >        | Maior que                    | (a > b)            |
| <        | Menor que                    | (a < b)            |
| >=       | Maior ou igual a             | (a >= b)           |
| <=       | Menor ou igual a             | (a <= b)           |
| ==       | Igual a                      | (a == b)           |
| !=       | Diferente de                 | (a != b)           |
| ===      | Idêntico a                   | (a === b)          |
| !==      | Não idêntico a               | (a !== b)          |
| &&       | E/and                        | (a && b)           |
| ||       | Ou/or                        | (a || b)           |

*/