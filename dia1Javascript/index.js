
//Declaracion de variable
let variable = 'test'
//Declaracion de constante
const constante = 'test'

//Tipos de datos
let numero = 12.0
let string = '120asdf'
let booleano = true
let sindefinir;

//Comprobacion del tipo
console.log('tipo de numero: ', typeof numero)
console.log('tipo de string: ', typeof string)
console.log('tipo de booleano: ', typeof booleano)
console.log('tipo de sindefinir: ', typeof sindefinir)

//Cambio de tipos
numero = 'es un string'

const numeroComoString = Number(numero)


console.log('tipo de numero despues del cambio: ', typeof numero)
console.log('tipo de numeroComoString: ', typeof numeroComoString)

const stringAsNumber = Number(string)

console.log('value string as number', stringAsNumber)
console.log('typeof stringAsNumber', typeof stringAsNumber)
