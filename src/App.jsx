import { useState, useRef } from 'react'
import axios from 'axios'
import * as S from './App.ts'
import WeatherInformation from './components/WeatherInformation/index.jsx'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = '02b0d873ec74c03454e5e4d285dd5352'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiData = await axios.get(url)
    setWeather(apiData.data)
  
  }

  return (
    <>
      <S.Container>
        <S.Title>Previsão do Tempo</S.Title>
        <S.TextInput ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
        <S.SearchBtn onClick={searchCity}>Buscar</S.SearchBtn>
        <WeatherInformation weather={weather}/>
      </S.Container>
    </>
  )
}

export default App
