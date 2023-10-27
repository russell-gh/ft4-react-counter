import React, { Component } from "react";
import { getLocation } from "./utils/location";
import "./App.css";
import { OWM_API_KEY, OWM_API_URL } from "./config";
import axios from "axios";
import { validate } from "./utils/validation";

class App extends Component {
  state = {};

  //get users location when compontent mounts
  async componentDidMount() {
    try {
      //get the users location
      const coords = await getLocation();

      this.getWeather(coords.latitude, coords.longitude);

      this.setState({ coords });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  //get location when user types
  onLocationInput = async (e) => {
    //check if input is valid
    const errors = await validate("location", { location: e.target.value });
    if (errors) {
      this.setState({ locationError: errors.location });
    } else {
      this.setState({ locationError: "" });
    }

    try {
      const { data } = await axios.get(
        `${OWM_API_URL}/geo/1.0/direct?q=${e.target.value}&limit=0&appid=37b29f091f8754cf8600dea56dee3863`
      );

      //if no results, quit early
      if (data.length === 0) {
        return;
      }
      const { lat, lon } = data[0];

      this.getWeather(lat, lon);
    } catch (e) {
      this.setState({ error: true });
    }
  };

  //gets the weather
  getWeather = async (lat, lon) => {
    try {
      const weather = await axios.get(
        `${OWM_API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`
      );

      this.setState({ weather: weather.data });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    // console.log(this.state);

    const { weather } = this.state;

    return (
      <>
        <p>{this.state.error && "An error occured!"}</p>
        <input type="text" onInput={this.onLocationInput} />
        <p>{this.state.locationError}</p>
        {weather &&
          weather.list.map((item) => {
            return <p>{item.main.temp}</p>;
          })}
      </>
    );
  }
}

export default App;
