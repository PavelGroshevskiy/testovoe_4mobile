import React from "react";

import "./App.css";

import Search from "./components/Search";
import CurrentWeather from "./components/current-weather/Current-Weather";
import WeatherService from "./API/WeatherService";

function App() {
	const [currentWeather, setCurrentWeather] = React.useState(null);

	const handleSearchChange = (searchData) => {
		const [latitude, longitude] = searchData.value.split(" ");

		const weather = WeatherService.getWeather(latitude, longitude);
		weather.then((responseWeather) => {
			setCurrentWeather({ city: searchData.label, ...responseWeather });
		});
	};

	console.log(currentWeather);

	return (
		<div className="App">
			<Search onSearchChange={handleSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
		</div>
	);
}

export default App;
