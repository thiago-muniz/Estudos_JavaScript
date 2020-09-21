//Operadores Relacionais
// sempre retorna valor booleano
5 > 2 // true
7 < 4 // false
8 >= 8 // true
9 <= 7 // false
5 == 5 // true
4 != 4 // false

// quando existe um operador relacional
// e também um operador aritmético
// primeiro é feita a operação aritmética para
//depois ser comparado
var a = 8
var b = 15
// a <= b -10
//8 <= 5
//false

//operadores de identidade
5 == 5 //> true
5 == '5' //> true(testa apenas se tem o mesmo valor, porém um é number e o outro string)
5 === '5' //>false (testa se é do mesmo tipo e se tem mesmo valor)operador de igualdade restrita
5 === 5 //> true
// !==

//Operadores lógicos
!  //1º not - negação unário
%% // 2º and - conjunção binário
|| //3º or - disjunção binário


//Operador ternário
// Teste ? True : False
média >= 7.0 ? 'Aprovado':'Reprovado'

var res = x % 2 == 0 ?5:9
// res vai recerber 5 ou 9 dependendo da operação

var idade = 19
var r = idade >= 18? 'maior':'menor'
r //> 'maior'
