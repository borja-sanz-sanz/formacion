import { DECREMENT, INCREMENT, RESET } from "./constants"
import { ActionType, State } from "./types"

export const counterReducer = (state: State, action: ActionType) => {
    switch(action){
        case INCREMENT:
        return {count: state.count + 1}
        case DECREMENT:
        return {count: state.count - 1}
        case RESET:
        return {count: 0}
        default:
            return state
    }
}