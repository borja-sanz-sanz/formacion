export type Character = {
    id: number
    name: string
    ki: string
    maxKi: string
    race: string
    gender: string
    description: string
    image: string
    affiliation: string

}

export type Planet = {
    id: number
    name: string
    idDestroyed: boolean,
    description: string,
    image: string
}