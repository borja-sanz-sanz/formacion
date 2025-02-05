import { Link } from "react-router"
import { Character } from "../../shared/types"
import { useCharacters } from "./CharactersProvider"
import { ADD_CHARACTER } from "./constants"

type CharacterCardProps =  {
    character: Character
}

export const CharacterCard = ({character}: CharacterCardProps) => {

    const {state, dispatch} = useCharacters()

    return <>
    
    <p>Favourite characters {JSON.stringify(state)}</p>
    <div style={{marginBottom: '30px'}}>
        <img src={character.image} width={100} />
        <h2>{character.name}</h2>
        <Link to={`/character/${character.id}`}>Más información</Link>
        <button onClick={() => dispatch({type: ADD_CHARACTER, payload: character})}>Add to favourites</button>
    </div>
    </>
}