import axios from "axios";

export const rickMortyAPI = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
})