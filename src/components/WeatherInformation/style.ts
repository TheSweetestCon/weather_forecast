import styled from 'styled-components'

export const Container = styled.div`
    background-color:  rgba(255,255,255,0.8);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    display: flex;
`;

export const TempContainer = styled.div`
    width: 50%;
`;

export const Title = styled.h2`
    font-size: 2rem;
`;

export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
`;

export const TextTemp = styled.p`
    font-weight: bold;
    font-size: 2rem;
`;

export const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-bottom: 10px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    justify-content: space-evenly;
`;

export const TextDescription = styled.p`
    font-weight: bold;
    text-align: left;
`;