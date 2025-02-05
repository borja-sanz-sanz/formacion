

//Generar una ruta para el listado de personajes
//generar una ruta para el detalle de personaje
//generar una ruta para el listado de planetas
//generar una ruta para el detalle de cada planeta
//crear un layout con un listado de navegacion 
// listado de planetas y listado de personajes
//crear una home

//crear un custom hook useFetch con tipado 
//generico para solicitar elementos a la api
//exponer estado de carga, datos y errores


//llamar a useFetch en characters-list y planets-list
//obteniendo el listado de cada uno con su tipo correspondiente
// y renderizando todos los datos con JSON.strigify(data)

//crear una card para cada personaje
//crear una card para cada planeta
//renderizar su nombre y su imagen
//y poner un link a la página especifica de cada personaje o planeta

//dentro del componente Planet y Character obtener la información
//del personaje o planeta especifico
// renderizamos algunos datos


//guardar personajes favoritos en listado
//boton para añadir a favoritos y para borrar de favoritos
//Contexto para almacenarlos
//reducer acciones: ADD_CHARACTER REMOVE_CHARACTER


import { BrowserRouter, Route, Routes } from "react-router"
import { CharactersList } from "./components/CharactersList/CharactersList"
import { PlanetsList } from "./components/PlanetsList/PlanetsList"
import { Character } from "./components/Character/Character"
import { Planet } from "./components/Planet/Planet"
import { Layout } from "./components/Layout/Layout"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<></>}  />
      <Route path="/characters-list" element={<CharactersList />}  />
      <Route path="/planets-list" element={<PlanetsList />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/planet/:id" element={<Planet />} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
