import { useRef } from "react"

//crear otro boton
//al clickar sobr el mostrar el valor del texto introducio en el input

export const UseRef = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFocus = () => {
        if(inputRef.current){
            console.log('input:', inputRef.current.focus())
        }
    }
    const handleMostrarValor = () =>{
        if(inputRef.current){
            alert(inputRef.current.value)
        }
    }

    return <div>
        <input type="texto" placeholder="Input de texto..." ref={inputRef} />
        <button onClick={() => {handleFocus()}}>Enfocar input</button>
        <button onClick={() => handleMostrarValor()}>Mostrar valor</button>
    </div>
}