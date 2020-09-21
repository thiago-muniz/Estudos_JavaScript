//Exemplo de ordem de precedência
/*
1º -> ()
2º -> **
3º -> * / %
4º -> + -
*/
var a = 5 + 3       //8
var b = a % 5       //3
var c = 5 * b**2    //45
var d = 10 - a/2    //6
var e = 6 * 2 / 2   //2
var f = b%e + 4/e   //3

// Auto-atribuição
var n = 3
n = n + 4 //7
n = n - 5 //2
n = n * 4 //8
n = n / 2 //4
n = n **2 //16
n = n % 5 //1

//Simplificando 
n = n + 4 //-> n += 4
n = n - 5 //-> n -= 5
n = n * 4 //-> n *= 4
n = n / 2 //-> n /= 2
n = n **2 //-> n **= 2
n = n % 5 //-> n %= 5

// Operador de incremento
 n++ // pos incremento de 1 (n += 1)
 n-- // pos decremento de 1 (n -= 1)
 ++n // pré incremento de 1
 --n // pré decremento de 1

