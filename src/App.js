import React from "react";

import "./App.css";

import Search from "./components/Search";
import CurrentWeather from "./components/Current-Weather/Current-Weather";
import WeatherService from "./API/WeatherService";
import Forecast from "./components/Forecast/Forecast";

function App() {
	const [currentWeather, setCurrentWeather] = React.useState(null);

	const handleSearchChange = (searchData) => {
		const [latitude, longitude] = searchData.value;

		const weather = WeatherService.getWeather({ latitude, longitude });
		weather.then((responseWeather) => {
			setCurrentWeather({ city: searchData.label, ...responseWeather });
		});
	};

	return (
		<div className="App">
			<Search onSearchChange={handleSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{currentWeather && <Forecast data={currentWeather} />}
		</div>
	);
}

export default App;
