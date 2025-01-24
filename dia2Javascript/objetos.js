console.log('Objetos');

const person = {
    name: 'Juan',
    age: 25,
    city: 'Madrid'
}

console.log('Hola me llamo ' + person.name+ " y tengo " + person.age + " años y vivo en " + person.city)


const calculadora = {
    sumar: (a, b) => a+b,
    restar: (a, b) => a-b
}

const contador = 8

const suma = calculadora.sumar(contador, 2)

console.log('suma', suma)
