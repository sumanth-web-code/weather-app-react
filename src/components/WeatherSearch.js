import React,{ useContext } from 'react';

import Context from '../Context';

const WeatherSearch = () => {
    const { api_call} = useContext(Context);
    return (
        <div className="weather-search">
            <form onSubmit={api_call} className="weather-search_form">
                <input type="text" className="input" name="location" autoComplete="off"/>
                  <div className="submit">
                      <button className="button">&rarr;</button>
                  </div>
            </form>
        </div>
      );
}
 
export default WeatherSearch;