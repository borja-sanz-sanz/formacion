import { useEffect, useState } from "react"


export const useFetch = <T, K>(url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasErrors, setHasErrors] = useState<K | boolean>(false)

    const [data, setData] = useState<T | undefined>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            try{
            setIsLoading(true)
            const response = await fetch(url)
            const responseJson = await response.json()
            setData(responseJson as T)
            setIsLoading(false)
        } catch(e){
            console.error(e)
            setHasErrors(true)
        }

        }
        fetchData()
    }, [])


    return {isLoading, hasErrors, data}
}