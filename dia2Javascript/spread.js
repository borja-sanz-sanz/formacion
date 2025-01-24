const array = [1,2,3,4]
const arrayMayor = [5,6,7,8]
const array2 = [...array, ...arrayMayor]
array.push(5)
console.log('array2', array2)


const arrayTresNumeros = [1,2,3]

const suma = (a, b, c) => {
    console.log('suma:', a+b+c)
}

suma(...arrayTresNumeros)


const objeto = {
    a: 1,
    b: 2
}
const copiaObjeto = {...objeto}
objeto.a = 5
console.log('copiaObjeto:', copiaObjeto)


const objeto1 = {
    a: 1,
    b: 2
}

const person = {
    name: 'Borja',
    edad: 99
}

const objetoCombinado = {...objeto1, ...person}

console.log('objetoCombinado', objetoCombinado)

const personaConDireccion = {...person, direccion: 'Calle de prueba'}

console.log('personaConDireccion', personaConDireccion)
