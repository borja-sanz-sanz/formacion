
type CondicionalProps = {
    mostrarTexto: boolean
}


export const Condicional = ({mostrarTexto}: CondicionalProps) => {
    return <div>
                {mostrarTexto === true && 'Mostramos el texto'}
    </div>
}