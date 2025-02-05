import { ADD_CHARACTER } from "./constants"
import { ActionType, State } from "./types"

export const characterReducer = (state: State, action: ActionType) => {

    switch(action.type){
        case ADD_CHARACTER:
        return {...state, favouriteCharacters: [...state.favouriteCharacters, {...action.payload}]} 
        default:
            return state
    }

}