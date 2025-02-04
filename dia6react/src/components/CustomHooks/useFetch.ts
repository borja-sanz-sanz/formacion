import { useEffect, useState } from "react"



export const useFetch = (url: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasErrors, setHasErrors] = useState(false)

    const [data, setData] = useState(undefined)

    useEffect(() => {
        const fetchData = async () => {
            try{
            setIsLoading(true)
            const response = await fetch(url)
            const responseJson = await response.json()
            setData(responseJson)
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