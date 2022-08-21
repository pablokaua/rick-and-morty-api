import styled from "styled-components";

export const ListContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 40px;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 200px;
    background: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 16px;
    transition: all 100ms ease-out;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0px 16px 32px #51BCC670;
    }

    & > p {
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        color: #51BCC6;
    }

    & > a {
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        color: #9FDDD4;
        transition: all 100ms ease-in-out;

        &:hover{
            transform: scale(1.05);
            color: #51BCC6;
        }
    }
`

export const WrapperImage = styled.div`
    max-width: 100%;
    width: auto;
    border-radius: 5px;
    overflow: hidden;

    & img {
        width: 100%;
    }
`

export const SpecieWrapper = styled.div`
    display: flex;
    gap: 8px;

    & > span {
        background-color: gray;
        color: #FFFFFF;
        padding: 6px;
        border-radius: 5px;
        transition: all 200ms ease-in-out;

        &:hover {
            filter: opacity(80%);
            transform: scale(1.1);
        }
    }

    & > span:first-child {
        background-color: #328943;
    }
`