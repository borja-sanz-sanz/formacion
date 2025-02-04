import { useFetch } from "./useFetch"

export const GenericTypes = () => {

    const {data} = useFetch<{name: string, address: string}, boolean>('url')
    const {data} = useFetch<{id: number, bol: boolean}, boolean>('url')

    return <div>
        <p><Wrapper value={"String"}/></p>
        <p><Wrapper value={true}/></p>
        <p><Wrapper value={{name: 'nombre', age: 30}}/></p>
    </div>
}

function Wrapper<T>({value}: {value: T}){
    return <div>Este es el value {JSON.stringify(value)}</div>

}