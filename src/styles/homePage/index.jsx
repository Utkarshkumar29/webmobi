import styled from "styled-components";

export const HomePageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
`

export const HomePageWrapper=styled.div`
    width: 100%;
    height: 100%;
`

export const ImageContainer=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `

export const ImageWrapper=styled.div`
    position: relative;
`

export const Image=styled.img`
    flex: 1;
    width: 100%;
    max-height: 500px;
    height: 100%;
`

export const InputWrapper=styled.div`
    padding: 15px;
    border: 2px solid #3498db;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    margin-bottom:5px;

    &:hover,
    &:focus {
        border-color: #2980b9;
    }

    &:focus {
        box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    }
`

export const Input=styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
`

export const DeleteIcon=styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 10px;
    cursor: pointer;
`
