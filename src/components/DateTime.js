import React from 'react';

const DateTime = () =>{
  const date = new Date();
  return(
        <div className="datetime">
            { `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`}
        </div>
  )
}

export default DateTime;