
/* type SaludarProps = {
    nombre: string
} */

const numero: number = 10;
const string: string = 'Hola mundo';
const boolean: boolean = true;
const sinDefinir: undefined = undefined;



console.log('numero', numero)
console.log('string', string)
console.log('boolean', boolean)
console.log('undefined', sinDefinir)


export const Saludar = ({nombre}: {nombre: string}) => {
    return <div>Hola {nombre}</div>
}