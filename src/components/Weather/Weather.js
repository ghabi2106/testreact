import React from 'react';
import PropTypes from 'prop-types';
import styles from './Weather.module.css';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard'
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {}, text: 'Brussels' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    axios.get('/WeatherForecast', {
      params: {
        cityname: "Brussels"
      }
    })
      .then(response => {
        console.log(response.data)
        var weather = response.data;
        this.setState({ weather });
      })
      .catch(error =>
        this.setState({
          error: true
        })
      );
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    axios.get('/WeatherForecast', {
      params: {
        cityname: this.state.text
      }
    })
      .then(response => {
        var weather = response.data;
        this.setState({ weather });
      })
      .catch(error =>
        this.setState({
          error: true
        })
      );
  }

  render() {
    return (
      <div>
        <h3>Weather</h3>
        <WeatherCard weather={this.state.weather} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Write a city name to its weather?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Send
          </button>
        </form>
      </div>
    );
  }


}

export default Weather;
