import './App.css'
import { Alimentos } from './components/Alimentos'
import { Condicional } from './components/Condidiconal'
import { MiPrimerComponente } from './components/MiPrimerComponente'
import MiSegundoComponente from './components/MiSegundoComponente'
import { MostrarProducto } from './components/MostrarProducto'
import { Personas } from './components/Personas'
import { Saludar } from './components/Saludar'
import { Product } from './types'

function App() {

  //Manzana: es vegetariano
  //Carne de res: no es vegetariano


  const producto: Product = {
    name: 'laptop',
    price: 1000,
    discount: 10,
  }

  return (<>
  <MiPrimerComponente/>
  <MiSegundoComponente />
  <Saludar nombre={'Borja'}></Saludar>
  <MostrarProducto product={producto} />
  <Condicional mostrarTexto={true} />
  <Alimentos />
  <Personas /> 
  </>
  )
}

export default App
