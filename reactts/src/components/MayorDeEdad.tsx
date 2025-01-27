type MayorDeEdad = {
    edad: number
}


export const MayorDeEdad = ({edad}: MayorDeEdad) => {
    return <div>
        {edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad'}
    </div>
}