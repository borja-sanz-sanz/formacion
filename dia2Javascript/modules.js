import { nombre as nombreNombrado, saludar } from "./src/exportacionnombrada.js";
import nombre, {prueba} from "./src/exportaciondefault.js";

import resta, {suma} from './src/calculadora.js'

console.log('nombre exportacion nombrada', nombreNombrado)

saludar()

console.log('nombre defecto', nombre)
console.log('prueba: ', prueba)

console.log('suma 3 + 5', suma(3,5))
console.log('resta 5 - 3', resta(5,3))