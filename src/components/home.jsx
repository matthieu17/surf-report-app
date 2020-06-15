import React from 'react';
import Spot from './spot'
import Day from './day'

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        emptyTab: true,
        data: [],
        lat: 46.256031,
        lng: -1.523414,
        params: 'waveHeight,wavePeriod,windDirection,waveHeight,wavePeriod,windSpeed',
        hours: []
      };
    }

  
    componentDidMount() {
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${this.state.lat}&lng=${this.state.lng}&params=${this.state.params}`, {
            headers: {
              'Authorization': '1d1ddace-ae6d-11ea-9fc5-0242ac130002-1d1ddd8a-ae6d-11ea-9fc5-0242ac130002'
            }
          }).then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              data: result,
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    componentDidUpdate() {
      let days = [];
      let tab = [];
      
      if(this.state.emptyTab){
        this.state.data.hours.forEach((item, index) => {
          if(index%24){
            days.push(item);
          }else{
            tab.push(days);
            days = [];
          }
        });
        this.setState({
          hours: tab,
          emptyTab: false,
        });
      }
    }


  
    render() {
      console.log(this.state.hours)
      const { error, isLoaded, data, hours, emptyTab } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (emptyTab) {
        return <div>Chargement…</div>;
      } else {
        if(!emptyTab){
        return (
          <ul>
            {hours.map((item,index) => (
                <>
                  {item[1]
                  ? <Day index={index} item={item}/> 
                  : ''}
                </>
            ))}
          </ul>
        );
      }
      }
    }
  }