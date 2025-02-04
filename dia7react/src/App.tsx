import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { About } from "./components/About"
import { useCallback, useEffect, useState } from "react"
import { Users } from "./components/Users"
import { Products } from "./components/Products"
import { Layout } from "./components/Layout"
import { GenericTypes } from "./components/tipos/GenericTypes"


// /contact -> Contact.tsx
// /about -> About.ts


export const PAGES = {
  "Home": <Home />,
  "Contact": <Contact />,
  "About": <About />
}

type Page = {
  name: "Home" | "Contact" | "About",
  url: string
}

function App() {
  const [apiResponse, setApiResponse] = useState<undefined | Page[]>(undefined)
  
  const fetchPages = useCallback(() => {
    setApiResponse([
      {name: "Home", url: "/"},
      {name: "Contact", url: "/contact"},
      {name: "About", url: "/about"}
    ])
  }, [])

  useEffect( () => {
    fetchPages()
  }, [fetchPages]) 


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  element={<Layout/>}>
      {apiResponse?.map(element => {
        return <Route path={element.url} element={PAGES[element.name]} />
      })}

      <Route path="/users/:id" element={<Users />} />
      <Route path="/products/:indetifier" element={<Products />} />
      </Route>
{/*       <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} /> */}
    </Routes>
      
      </BrowserRouter>
      <GenericTypes />
    </>
  )
}

export default App
