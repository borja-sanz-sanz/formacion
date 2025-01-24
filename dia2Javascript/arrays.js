
//Declaracion
const frutas = ["Manzana", "Banana", "Pera"]
const numeros = [10, 20, 30]

const objetos = [{name: 'Borja', age: 99}, {name: 'Borja', age: 99}, {name: 'Borja', age: 99}]

//Acceso
console.log("posicion 0 frutas", frutas[0])


//Añadir
frutas.push("Naranja")

console.log('Frutas: ', frutas)

//Eliminar
frutas.pop("Manzana")
console.log('Frutas eliminado: ', frutas)

 
let numerosVacios = []

for (let i = 1; i<= 10; i++){
    numerosVacios.push(i)
} 

console.log('numerosVacios', numerosVacios);


//Funciones ES6
/**
 * map //procesa un array y devuelve el resultado
 * filter //filtra los elementos de un array
 * reduce // realica operaciones acumulativas
 * find // busca un elemento en el array
 * forEach // recorre el array
 */


numerosVacios.forEach((elemento, indice) => {
    console.log('Dentro de forEach', elemento, indice)
})

const numerosVaciosDobles = numerosVacios.map((elemento) => elemento * 2)

console.log('Numeros vacios dobles:', numerosVaciosDobles)

//%

const numeroPar = 4

console.log('Es par', numeroPar % 2 === 0)

const numerosParesImpares = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numerosParesImpares.map(numero => {
    if(numero % 2 === 0){
        return numero
    }
})

console.log('numerosPares:', numerosPares)

const numerosParesFiltered = numerosParesImpares.filter(numero => numero % 2 === 0)

console.log('numerosParesFiltered:', numerosParesFiltered)

const numeroCinco = numerosParesImpares.find(numero => numero === 5)

console.log('numero5:', numeroCinco)


const numerosReduce = [1,2,3,4,5]

const suma = numerosReduce.reduce((acumulador, valorActual) => {
    //0 + 1 = 1
    //1 + 2 = 3
    return acumulador + valorActual
})

console.log('Suma:', suma)


const frutasDuplicadas = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'naranja', 'manzana'];

let manzana = 0
let banana = 0
let naranja = 0

frutasDuplicadas.forEach(fruta => {
    if(fruta === 'manzana'){
        manzana++
    }
    if(fruta === 'naranja'){
        naranja++
    }
    if(fruta === 'banana'){
        banana++
    }
})

console.log('Numero de frutas: manzanas: ' + manzana + ' naranjas:' + naranja + ' bananas:' + banana)

const objetoFrutas = {
    manzana: 0,
    naranja: 0,
    banana: 0
}

frutasDuplicadas.forEach(fruta => {
    objetoFrutas[fruta]++

   /*  if(fruta === 'manzana'){
        objetoFrutas.manzana++
    }
    if(fruta === 'naranja'){
        objetoFrutas.naranaja++
    }
    if(fruta === 'banana'){
        objetoFrutas.banana++
    } */
})

console.log('Numero de frutas objeto: manzanas: ' + objetoFrutas.manzana + ' naranjas:' + objetoFrutas.naranja + ' bananas:' + objetoFrutas.banana)

const frutasReduced = frutasDuplicadas.reduce((acumulador, fruta)=> {
    acumulador[fruta] = (acumulador[fruta] || 0) +1
    return acumulador
}, {})

console.log('frutasReduced', frutasReduced)