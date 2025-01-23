const numberAsString = '12.0'
const numberAsNumber = 12.0
const otherNumber = 10.0

//operadores
console.log('comparacion: ', numberAsString === numberAsNumber)
console.log('mayor que: ', numberAsString > numberAsNumber)
console.log('menor que: ', numberAsString < numberAsNumber)
console.log('mayor o igual que: ', numberAsString >= numberAsNumber)
console.log('menor o igual que: ', numberAsString <= numberAsNumber)
console.log('and: ', numberAsString && numberAsNumber)
console.log('or: ', numberAsString || numberAsNumber)

if(numberAsNumber > otherNumber ){
    console.log('es mayor')
}