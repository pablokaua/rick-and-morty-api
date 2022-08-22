import styled from "styled-components";

export const ErrorWrapper = styled.div`
    font-size: 50px;
    color: red;
    text-align: center;
    width: 100%;
    height: 100%;
`

export const LoadingWrapper = styled.div`
    font-size: 50px;
    color: #0E67A7;
    text-align: center;
    width: 100%;
    height: 100%;
`

export const CardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 70%;
    background-image: url(https://pngimg.com/uploads/rainbow/rainbow_PNG5572.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-clip: content-box;
    background-color: #F5F6FA;
    padding: 20px;
    box-shadow: 2px 3px 10px 1px black;
    border-radius: 14px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    transition: all 200ms ease-out;

    &:hover {
        transform: scale(1.01);
    }

    & > div {
        display: flex;
        gap: 20px;
    }
`

export const ImageWrapper = styled.div`
    width: 30%;

    & > img {
        width: 100%;
    }
`

export const InfosWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    & > h3 {
        color: #0E67A7;
        text-shadow: 3px 4px 2px black;
        font-size: 60px;
        font-weight: 900;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: bold;

        & span {
            background-color: gray;
            padding: 5px;
            color: white;
        }
    }
`

export const SpecieWrapper = styled.div`
    font-size: 40px !important;
    text-align: center !important;

`

export const Identification = styled.div`
    width: 30%;
    
    & img {
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
    }

    & > p {
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`

export const Signature = styled.p`
    margin-left: 50px;
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-weight: bold;
    font-size: 30px;
`