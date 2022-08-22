import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCharacter } from "../../services/rickMortyService";
import { CardWrapper, ErrorWrapper, Identification, ImageWrapper, InfosWrapper, LoadingWrapper, Signature, SpecieWrapper } from "./style";



export const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const PersonagemCard = () => {
    const [character, setCharacter] = useState({});
    const [origin, setOrigin] = useState({});
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        (async() => {
            setIsLoading(true);
            try {
                await delay();
                const { data } = await getCharacter(id);
                setOrigin(data.origin);
                setLocation(data.location);
                setCharacter(data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [id]);

    if (isLoading) {
        return (
            <LoadingWrapper>Carregando...</LoadingWrapper>
        );
    }

    if(isError) {
        return (
            <ErrorWrapper>Ops! Algo deu errado</ErrorWrapper>
        );
    }

    return (
        <CardWrapper>
            <div>
                <ImageWrapper>
                <img src={character.image} alt={character.name} />
                </ImageWrapper>
                <InfosWrapper>
                    <h3>{origin.name}</h3>
                    <div>
                        <span>sex: {character.gender}</span>
                        <span>status: {character.status}</span>
                        <span>type: {character.type === "" ? "???" : character.type}</span>
                    </div>
                    <SpecieWrapper>species: {character.species}</SpecieWrapper>
                </InfosWrapper>
            </div>
            <div>
                <Identification>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/199/361/non_2x/barcode-png.png" alt="codigo de barras" />
                    <p>nome: {character.name}</p>
                    <p>{location.name}</p>
                </Identification>
                <Signature>{character.name}</Signature>
            </div>
        </CardWrapper>
    );
}       