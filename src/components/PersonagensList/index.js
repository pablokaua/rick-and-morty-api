import { useEffect, useState } from "react"
import { getCharacter } from "../../services/rickMortyService"
import { Link } from "react-router-dom";

export const PersonagensList = () => {
    const [personagensList, setPersonagensList] = useState([])

    useEffect(() => {
        const generateCharacterPromises = () => 
            Array(10)
            .fill()
            .map((_, index) => getCharacter(index + 1).then((response) => response.data))
        

        const characterPromises = generateCharacterPromises();
        Promise.all(characterPromises).then(character => setPersonagensList(character));
    },[])
    
    return (
        <div>
            {personagensList.map(character => (
                <div key={character.id}>
                    <li>{character.name}</li>
                    <Link to={`${character.id}`}>Ir para personagem</Link>
                </div>
            ))}
        </div>
    )
}