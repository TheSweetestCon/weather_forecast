import * as S from './style'

export default function WeatherInformation({weather}){


    return(
        
        <>
            {!weather.weather ? 
                <p>Dado do tempo indisponíveis para o destino informado!</p>
            :
                <S.Container>
                    <S.TempContainer>
                        <S.Title>{weather.name}</S.Title>
                        <S.ImgContainer>
                            <S.Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                            <S.TextTemp>{Math.round(weather.main.temp)}°C</S.TextTemp>
                        </S.ImgContainer>
                        <S.Description>{weather.weather[0].description}</S.Description>
                    </S.TempContainer>
                    <S.DetailsContainer>
                        <S.TextDescription>Sensação Térmica: {Math.round(weather.main.feels_like)}</S.TextDescription>
                        <S.TextDescription>Umidade: {weather.main.humidity}%</S.TextDescription>
                        <S.TextDescription>Pressão: {weather.main.pressure}</S.TextDescription>
                    </S.DetailsContainer>
                </S.Container>
            }
        </>
    )
}