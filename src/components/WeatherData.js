import React, { useContext} from 'react';
import Context from '../Context';

const WeatherData = () => {
   const { weather, city} = useContext(Context);
    const {temp, humidity, pressure} = weather
    return ( 
  <div className="weather-data">
      <p className="weather__tagline">Weather Information for <span className="city">{city}</span></p>
  <div className="box">
    <span className="property">
      <p className="title">Temperature</p>
      <p className="value">{temp}</p>
    </span>
    <span className="property">
      <p className="title">Humidity</p>
      <p className="value">{humidity}</p>
    </span>
    <span className="property">
      <p className="title">Pressure</p>
      <p className="value">{pressure}</p>
    </span>
  </div>
</div>
     );
}
 
export default WeatherData;