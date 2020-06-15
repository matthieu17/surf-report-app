import React, { useState, useEffect } from 'react';

function Hours({i}) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);
  const date = new Date(i.time);

    return (
    <> {date.getUTCHours()}h:    Wave height:{i.waveHeight.noaa}, Wave Period: {i.wavePeriod.noaa}  Wind speed: {i.windSpeed.noaa*3.6}km/h </>
    );

 
}

export default Hours;