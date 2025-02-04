import { useFetch } from "./useFetch"

export const FetchPosts = () => {
    const {isLoading, hasErrors, data} = useFetch('https://randomuser.me/api/?results=10')

    return <div>
        {!hasErrors && isLoading ? 'Loading' : JSON.stringify(data)}
        {hasErrors && 'Se ha producido un error vuelva a intentarlo'}
    </div>
}