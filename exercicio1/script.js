// Construa um programa que:
// a) Peça ao usuário que insira um número par
let numeroPar = Number (prompt("Insira um número par"))
console.log("Número escolhido pelo usuário:",numeroPar);

// b) Imprima no console o resto da divisão desse número por 2.
let numeroDois = 2
let restoDaDivisão = numeroPar % numeroDois
console.log("Resto da divisão (%) por 2 =",restoDaDivisão);

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código. 
// Ao fazer o resto da divisão de qualquer número par por 2 (DOIS), o resultado é sempre 0 (ZERO).

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
// Já ao fazer o resto da divisão de qualquer número ímpar por 2 (DOIS), o resultado é sempre 1 (UM).

// 💡 Dica: não se esqueça de converter as respostas para o tipo número