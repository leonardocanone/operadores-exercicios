// # Exercício 3
// ### Parte 1 - Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// Exemplo:
const exemplo1 = 20 < 50 && 50 > 90;
console.log("Exemplo 1 false:",exemplo1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,

// a) 5 é maior que 20 e também é menor que 2;
const letraA = 5 > 20 && 5 < 2
console.log("A false:",letraA);  

// b) 5 é igual a 5 ou é igual a “5”;
const letraB = 5 === 5 || 5 === "5"
console.log("B true:",letraB);

// c) negação de (vinte é maior que cinquenta)
const letraC = !(20 > 50)
console.log("C true:",letraC);

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const letraD = !((20 > 50) || (50 > 60))
console.log("D true:",letraD);


// ### Parte 2
// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 
// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50
// b) Comissão de 10% sobre o total de vendas mensal
// c) Total de vendas dos meses de janeiro a junho:
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00

let comissaoSobreVendas = 0.1

// d)  Desconto do INSS 5% do salário
let descontoInss = 0.05
let salarioAposInss = 0.95

// Calcule:
// 1) O salário fixo mais o auxílio creche 
let salarioFixo = 2000
let auxilioCreche = 45.50
let quantidadeFilhos = 2 
let auxilioCrecheQuantidadeFilhos = auxilioCreche * quantidadeFilhos
// Vale lembrar que ele tem 2 filhos, portanto são 2 auxílios

let fixoMaisCreche = salarioFixo + auxilioCrecheQuantidadeFilhos
console.log("1) Salário fixo + Aux. Creche p/ 2 filhos =",fixoMaisCreche);

// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissaoJaneiro = vendasJaneiro * comissaoSobreVendas
console.log("2) Comissão recebida em Janeiro =",comissaoJaneiro);

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let descontoInssJaneiro = (salarioFixo + comissaoJaneiro) * descontoInss
console.log("3) Desconto INSS em Janeiro =",descontoInssJaneiro.toFixed(2));

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let liquidoJan = (salarioFixo + (vendasJaneiro * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos
let liquidoFev = (salarioFixo + (vendasFevereiro * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos
let liquidoMar = (salarioFixo + (vendasMarco * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos
let liquidoAbr = (salarioFixo + (vendasAbril * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos
let liquidoMai = (salarioFixo + (vendasMaio * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos
let liquidoJun = (salarioFixo + (vendasJunho * comissaoSobreVendas)) * salarioAposInss + auxilioCrecheQuantidadeFilhos

console.log("4) Salário Líquido Janeiro =",liquidoJan.toFixed(2));
console.log("   Salário Líquido Fevereiro =",liquidoFev.toFixed(2));
console.log("   Salário Líquido Março =",liquidoMar.toFixed(2));
console.log("   Salário Líquido Abril =",liquidoAbr.toFixed(2));
console.log("   Salário Líquido Maio =",liquidoMai.toFixed(2));
console.log("   Salário Líquido Junho =",liquidoJun.toFixed(2));

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

let mediaJanJun = (liquidoJan + liquidoFev + liquidoMar + liquidoAbr + liquidoMai + liquidoJun) / 6
console.log("5) Média Janeiro a Junho =",mediaJanJun.toFixed(2));