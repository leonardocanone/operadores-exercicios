// # Exercício 2
// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

const num1 = Number (prompt("Digite um número qualquer"))
const num2 = Number (prompt("Digite outro número"))
console.log(num1,"|",num2);

// O primeiro numero é maior que o segundo?
const teste1 = num1 > num2
console.log("A true:",teste1);

// O primeiro numero é igual ao segundo?
const teste2 = num1 === num2
console.log("B false:",teste2);

// O primeiro numero é divisível pelo segundo? true
const teste3 = (num1 % num2) === 0
console.log("C true:",teste3);

// O segundo numero é divisível pelo primeiro? true
const teste4 = (num2 % num1) === 0
console.log("D false:",teste4);

// Obs 1 - divisível = com resto zero
// Obs 2 - A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!