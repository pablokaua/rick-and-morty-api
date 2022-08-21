import { useEffect, useState } from "react"
import { getCharacter } from "../../services/rickMortyService"
import { Link } from "react-router-dom";
import { Item, ListContainer, SpecieWrapper, WrapperImage } from "./style";

export const PersonagensList = () => {
    const [personagensList, setPersonagensList] = useState([])

    useEffect(() => {
        const generateCharacterPromises = () => 
            Array(30)
            .fill()
            .map((_, index) => getCharacter(index + 1).then((response) => response.data))
        

        const characterPromises = generateCharacterPromises();
        Promise.all(characterPromises).then(character => setPersonagensList(character));
    },[])
    
    return (
        <ListContainer>
            {personagensList.map(character => (
                <Item key={character.id}>
                    <WrapperImage>
                        <img src={character.image} alt={character.name} />
                    </WrapperImage>
                    <p>{character.name}</p>
                    <SpecieWrapper>
                        <span>{character.gender}</span>
                        <span>{character.species}</span>
                    </SpecieWrapper>
                    <Link to={`${character.id}`}>Saiba mais</Link>
                </Item>
            ))}
        </ListContainer>
    )
}