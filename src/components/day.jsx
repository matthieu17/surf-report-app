import React, { useState, useEffect } from 'react';
import Hours from './hours'

function Day({index,item,addDate}) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);
   const date = new Date(item[0].time);


  

    return (
      <div>
         <p>{date.toDateString()}</p> 
         <ul>
         {item.map((i,index) => (
               <li key={i.time}>
                  {i.waveHeight
                  ? <Hours i={i} />
                  : ''}
               </li>
            ))}
         </ul>
      </div>
    );

 
}

export default Day;