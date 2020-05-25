import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Error from './Error';
import DateTime from './DateTime';
import Footer from './Footer';
import axios from 'axios';

import Context from '../Context';

const Main = () => {
   const [ weather ,setWeather] = useState();
   const [city,setCity] = useState();
   const[error,setError] = useState();
   const api_call = async (e) => {
      e.preventDefault();
      const location = e.target.elements.location.value;
      if(!location) return setError('Please Enter the City Name.'),setWeather(null)
      const API_KEY= "3879df2d4a06998db61519b0a83c453b";
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      const request = axios.get(url)
      const response = await request
       setWeather(response.data.main);
       setCity(response.data.name);
       setError(null);
   }

    //weather && console.log(weather);
   
return ( 
        <div className="main">
           <Header/>
           <Content>
              <DateTime/>
              <Context.Provider value={{ api_call: api_call, weather,city}}>
                 <WeatherSearch/>
                 { weather &&<WeatherData/> }
                 { error && <Error error={error}/>}
              </Context.Provider>
               <Footer/>
            </Content>
        </div>
     );
}
 
export default Main;
