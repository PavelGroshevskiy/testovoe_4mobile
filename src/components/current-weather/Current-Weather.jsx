import React from "react";
import "./current-weather.css";

const WEATHER_CODE_TO_LABEL = [
	"Ясно",
	"Преимущественно ясно",
	"Переменная облачность",
	"Пасмурно",
];

const CurrentWeather = ({ data }) => {
	return (
		<div className="weather">
			<div className="top">
				<div>
					<p className="city">{data.city}</p>
					<p className="weather-description">
						{WEATHER_CODE_TO_LABEL[data.current_weather.weathercode] ?? "Another weather"}
					</p>
				</div>
				<img
					alt="weather"
					className="weather-icon"
					srcSet={(`icons/${data.current_weather.weathercode}.png `, `icons/1.png`)}
				/>
			</div>
			<div className="bottom">
				<p className="temperature">{Math.round(data.current_weather.temperature)}°C</p>
				<div className="details">
					<div className="parameter-row">
						<span className="parameter-label">Details</span>
					</div>

					<div className="parameter-row">
						<span className="parameter-label">Wind</span>
						<span className="parameter-value">{data.current_weather.windspeed} km/h</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
