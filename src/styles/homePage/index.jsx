import styled from "styled-components";

export const HomePageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomePageWrapper=styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    @media (max-width:426px) {
        padding: 7px;
    }
`

export const ImageContainer=styled.div`
    width: 100%;
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
    max-width: 100%;
    max-height: 100%;
    
    width: 100%;
    height: 400px;

    @media (max-width: 768px) {
        height: 250px; 
    }

    @media (max-width: 480px) {
        height: 150px; 
    }
`

export const InputWrapper=styled.div`
    padding: 15px;
    border: 2px solid #3498db;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    margin-bottom: 10px; 

    p {
        margin-bottom: 10px;
        font-size: 16px;
        color: #3498db;
    }

    &:hover {
        border-color: #2980b9;
    }

    &:focus-within {
        box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
    }
`

export const Input=styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
`

export const DeleteIcon=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 100%;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: rgba(255, 0, 0, 0.8);
    }
`
