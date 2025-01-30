import { Context } from "./components/Context/Context"
import { Posts } from "./components/Posts"
import { AppContext } from "./components/Theme/AppContext"
import { UseRef } from "./components/UseRefDOM"
import { UseRefValues } from "./components/UseRefValues"

function App() {

  return (
    <>
    <UseRef />
    <UseRefValues />
   {/*  <Posts/> */}
   <Context/>
   <AppContext /> 
</>

  )
}

export default App
