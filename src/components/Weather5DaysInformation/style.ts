import styled from 'styled-components'


export const Container = styled.div`
    background-color:  rgba(255,255,255,0.8);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
`;

export const ForecastContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
`;

export const DetailText = styled.p`
    font-size: 14px;
    text-transform: capitalize;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2rem;
`;



export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
`;


export const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-bottom: 30px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const TextDescription = styled.p``;

