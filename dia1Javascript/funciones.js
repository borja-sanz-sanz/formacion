function saludar(nombre){
    return 'Hola ' + nombre
}

const saludo = saludar('Borja')

console.log(saludo)

//Arrow function

const minorNumber = 1
const mayorNumber = 10

const isGreaterThan = (mayorNumber, minorNumber) =>  mayorNumber > minorNumber

console.log('IsGreatherThan', isGreaterThan(mayorNumber, minorNumber))

//Funcion suma
//recibe a y b y devuelve a + b


//hoisting
console.log('suma: ', suma(2,2))

function suma(a, b) {
    return a + b
}

const sumaArrow = (a, b) => a + b

console.log('sumaArrow: ', sumaArrow(2,2))


//funciones como constantes

const sumaConstante = function(a,b){
    return a + b
}

console.log('sumaConstante: ', sumaConstante(2,2))

//funciones anonimas
setTimeout(function(){
    console.log('Hola desde una funcion anonima')
}, 2000)

setTimeout(() => {
    console.log('Hola desde una funcion arrow anonima')
}, 2000)


//Callbacks

function procesarNumero(numero, callback){
    console.log('Procesando numero:', numero)
    const numeroAsNumber = Number(numero)
    return callback(numeroAsNumber)
}

const doblarNumero = (numero) => numero * 2
const sumar10 = (numero) => numero + 10

//Multiplicar numero por dos
console.log('numero multiplicado por dos', procesarNumero('10', doblarNumero))
console.log('numero + 10', procesarNumero('10', sumar10))


//Closures

function crearContador(){
    let contador = 0
    return function(){
       return {
        increment: () => {
            contador++
            console.log('contador: ', contador)

        },
        decrement: () => {
            contador--
            console.log('contador: ', contador)
        }
       }
    }
}

const miContador = crearContador()
miContador().decrement()
miContador().increment()
miContador().increment()
miContador().increment()
miContador().increment()

const miSegundoContador = crearContador()
miSegundoContador().increment()
