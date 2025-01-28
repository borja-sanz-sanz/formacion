import { useEffect, useState } from "react"

export const UseEffect = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        //Codigo que se ejecuta en la creación del componente
        console.log('El componente se ha creado')

        return () => {
            //Codigo que se ejecuta en la destruccion del componente
            console.log('El componente se ha desmontado')
        }
    }, [])

    useEffect(() => {
        console.log('Contador se ha modificado')
     /*    return () => {
            //Codigo que se ejecuta en la destruccion del componente
            console.log('El componente se ha desmontado')
        } */
    }, [contador])

    return <>
    <button onClick={() => setContador(contador+1)}>Incrementar</button>
    <div>Contador: {contador}</div></>

}
