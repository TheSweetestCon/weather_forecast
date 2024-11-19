import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1000px;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #FFF
`;

export const TextInput = styled.input`
    padding: 10px;
    border-radius: 20px 0 0 20px;
    border: none;
    width: 60%;
    max-width: 300px;
    outline: none;
    margin-top: 10px;
`;

export const SearchBtn = styled.button`
    background-color: #FF9800;
    border: none;
    padding: 10px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    font-weight: bold;
    color: #FFF;
    

    &:hover{
        background-color: #F57C00;
    }
`;

export const WeekForecast = styled.div`
    display: flex;
    flex-direction: column;
    background-color:  rgba(255,255,255,0.8);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
`;
