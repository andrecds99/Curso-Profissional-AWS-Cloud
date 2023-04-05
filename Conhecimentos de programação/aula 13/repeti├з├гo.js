/*
var c = 1
do {
    console.log(`Passo ${c}`)
    c++ 
} while (c <= 10)
*/

var passo = 3
var inicio = 1
var fim = 12
while (inicio <= fim) {
    console.log(`Passo ${inicio}`)
    var auxInicio = inicio
    var inicio = passo + auxInicio
} 
console.log ('Acabou!!')


//for (var;teste lógico;incremento)
/* console.log ('Vai começar...')
for (var c=1;c<=20;c++) {
    console.log (`Passo ${c}`)
}
console.log ('FIM!')
*/