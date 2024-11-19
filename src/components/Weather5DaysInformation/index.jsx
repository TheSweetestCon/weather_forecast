import { useEffect } from 'react';
import * as S from './style';

export default function Weather5DaysInformation({ weather5days }) {
  useEffect(() => {
    console.log('Dados atualizados no componente:', weather5days);
  }, [weather5days]);

  if (!weather5days || !weather5days.list || weather5days.list.length === 0) {
    return <p>Carregando dados...</p>;
  }

  const dailyForecast = weather5days.list.filter(forecast =>
    forecast.dt_txt.includes('12:00:00')
  );

  function toDate(date){
    return new Date(date*1000).toLocaleDateString('pt-BR', { weekday: 'long' })
  }

  return (
    <>
        <S.Title>Previsão para os próximos 5 dias</S.Title>
        <S.ForecastContainer>
        {dailyForecast.map((forecast, index) => (
            <S.Container key={index}>
            <S.DetailText>{toDate(forecast.dt)}</S.DetailText>
            <S.Image src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
            <S.DetailText>{Math.round(forecast.main.temp)}°C</S.DetailText>
            <S.DetailText>{forecast.weather[0].description}</S.DetailText>
            </S.Container>
        ))}
        </S.ForecastContainer>
    </>
  );
}
