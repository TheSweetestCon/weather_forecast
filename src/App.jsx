import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import * as S from './App.ts';
import WeatherInformation from './components/WeatherInformation/index.jsx';
import Weather5DaysInformation from './components/Weather5DaysInformation/index.jsx';

function App() {
  const [weather, setWeather] = useState(null);
  const [weather5days, setWeather5days] = useState(null);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = '02b0d873ec74c03454e5e4d285dd5352';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiData = await axios.get(url);
      setWeather(apiData.data);

      const apiInfo5Days = await axios.get(url5days);
      setWeather5days(apiInfo5Days.data);
    } catch (error) {
      console.error('Erro na busca dos dados', error);
      alert('Erro ao buscar dados. Verifique o nome da cidade.');
    }
  }

  useEffect(() => {
    console.log('weather5days no App:', weather5days);
  }, [weather5days]);

  return (
    <S.Container>
      <S.Title>Previsão do Tempo</S.Title>
      <S.TextInput ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <S.SearchBtn onClick={searchCity}>Buscar</S.SearchBtn>
      {weather && <WeatherInformation weather={weather} />}
      <S.WeekForecast>
        {weather5days?.list && <Weather5DaysInformation weather5days={weather5days} />}

      </S.WeekForecast>
    </S.Container>
  );
}

export default App;
