import * as S from './style'

export default function WeatherInformation({weather}){


    return(
        
        <>
            {!weather.weather ? 
                <p>Dado do tempo indisponíveis!</p>
            :
                <S.Container>

                    <S.Title>{weather.name}</S.Title>
                <S.ImgContainer>
                    <S.Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                    <S.TextTemp>{Math.round(weather.main.temp)}°C</S.TextTemp>
                </S.ImgContainer>
                </S.Container>
            }
        </>
    )
}