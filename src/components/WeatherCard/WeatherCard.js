import React from 'react';
class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {}
        };
      }
    componentWillReceiveProps = (nextProps) => {
        this.setState({ data: nextProps.weather });
        console.log(nextProps)
    };

    render() {
        const data = this.state.data;
        return(
      <div className="card">
          <h2>{data?.name}</h2>
          <h3>Cloudy<span>Wind {data?.wind?.speed}km/h <span className="dot">•</span> {data?.wind?.deg} 0%</span></h3>
          <h1>{data?.main?.temp}°</h1>
          <div className="sky">
              <div className="sun"></div>
              <div className="cloud">
                  <div className="circle-small"></div>
                  <div className="circle-tall"></div>
                  <div className="circle-medium"></div>
              </div>
          </div>
          </div>
          );
    }
  }

  export default WeatherCard;