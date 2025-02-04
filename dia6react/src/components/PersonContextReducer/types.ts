import { SAVE_AGE, SAVE_NAME } from "./constants"

export type State = {
    name: string,
    age: number
}

export type ActionType = {
    type: typeof SAVE_NAME | typeof SAVE_AGE,
    payload: string | undefined
 }