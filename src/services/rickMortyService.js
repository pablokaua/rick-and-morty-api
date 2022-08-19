import { rickMortyAPI } from "./rickMortyAPI"

export const getCharacter = (id) => {
    return rickMortyAPI.get(`character/${id}`)
}