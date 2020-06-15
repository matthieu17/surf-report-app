import React, { useState } from 'react';

function Spot({index,item,addDate}) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [hour, setHour] = useState([]);
  console.log(item);
  
  const date = new Date(item[0].time);
  return (
    <div>
         {(index%23)
                  ? ''
                  : <div><p> ---------------------------------------- </p> <p> {date.toDateString()} </p></div> }
      {item.waveHeight 
                  ? <p>{date.getHours()}h:    Wave height:{item.waveHeight.noaa}, Wave Period: {item.wavePeriod.noaa}  Wind speed: {item.windSpeed.noaa*3.6}km/h </p>
                  : '' }
    </div>
  );
}

export default Spot;