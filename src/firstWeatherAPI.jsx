import React, { useState, useEffect } from 'react';
import bg2 from '/src/assets/bg2.jpg'
const WeatherApp = () => {
  const [city, setCity] = useState('Mecca');
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = 'bcf0da2b8cd2beca4dba59ce113ee74f';
  const [weatherData, setWeatherData] = useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    windSpeed: undefined,
    precipitation: undefined,
    error: undefined
  });
  
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      if (city) {
        setWeatherData({ 
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          precipitation: data.rain ? data.rain['1h'] : null,
          error: ""
        });
      } else {
        setWeatherData({ 
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          pressure: undefined,
          description: undefined,
          windSpeed: undefined,
          precipitation: undefined,
          error: ""
        });
      }
    } catch (err) {
      setError("Please enter a valid location!");
      setWeatherData({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        description: undefined,
        windSpeed: undefined,
        precipitation: undefined,
        error: ""
      }), setTimeout(() =>{
        setError('')
      }, 2500)
    } finally {
      setLoading(false)
    }
  };
  
  useEffect(() => {
    fetchWeather(); 
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
<main className="flex justify-center h-[670px] border-2 border-black p-2 bg-black text-white max-w-[350px] w-full rounded-[40px] overflow-hidden shadow-2xl relative">
  <div className="border rounded-[30px] border-black h-full w-full bg-black bg-center bg-cover" 
  style={{ backgroundImage: `url(${bg2})`}}>
    <div className='flex justify-center items-center py-2'>
      <span className='bg-black rounded-3xl h-[30px] w-[100px]' />
    </div>
    <div className="flex flex-col flex-1 px-4 py-2">
      <form onSubmit={handleSubmit} className="mt-5 flex justify-between">
        <input
          className="p-3 text-xl border-t border-b border-l rounded-l-full bg-transparent text-white outline-none max-w-[220px] w-full"
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a location"
        />
        <button
          type="submit"
          className="button_color text-white p-3 px-4 rounded-r-full focus:outline-none"
        >
          Submit
        </button>
      </form>

      {weatherData.temperature && (
        <div className='mt-4 space-y-3'>
          <h1 className='flex font-bold text-[#ffffff] text-4xl'>{weatherData.city}</h1>
          <p className='flex font-bold justify-center text-6xl text-[#37ff00]'>{weatherData.temperature}<span className='text-xl'>°C</span></p>
          <p className=' text-xl font-serif flex ml-24'>{weatherData.description}</p>

          <div className='grid grid-cols-3 p-1 items-center dataBg text-black h-[80px] rounded-full w-full space-x-15'>
            <div className='flex items-center flex-col'>
              <p>💧</p>
              <p className='text-[#2848ff] font-bold'>{weatherData.humidity}%</p>
              <p className='text-[#2848ff] text-sm'>Humidity</p>
            </div>
            <div className='flex items-center flex-col'>
              <p>🌬</p>
              <p className='text-[#2848ff] font-bold'>{weatherData.pressure} hPa</p>
              <p className='text-[#2848ff] text-sm'>Pressure</p>
            </div>
            <div className='flex items-center flex-col mr-4'>
              <p>💨</p>
              <p className='text-[#2848ff] font-bold'>{Math.round(weatherData.windSpeed * 3.6)} km/h</p>
              <p className='text-[#2848ff] text-sm'>Wind speed</p>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className='text-center bottom-0 mt-40'>
          <p className="mt-0 font-medium text-3xl  ">Loading...</p>
        </div>
      )}

      {error && (
        <div className='text-center mt-40'>
          <p className="mt-0 font-medium text-3xl">{error}</p>
        </div>
      )}
    </div>

    <div className='text-center mt-4'>
      <span className='bg-white mt-0 rounded-3xl h-[5px] w-[120px]' />
    </div>
  </div>
 </main>
 );
};
export default WeatherApp;




