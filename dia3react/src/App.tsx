import { Fetch } from "./components/Fetch"
import { Temporizador } from "./components/Temporizador"
import { UseEffect } from "./components/UseEffect"
import { Users } from "./components/Users/Users"

function App() {
  return (
    <>
    <UseEffect />
    <Temporizador />
    {/* <Fetch /> */}
    <Users/>
    </>
  )
}

export default App
