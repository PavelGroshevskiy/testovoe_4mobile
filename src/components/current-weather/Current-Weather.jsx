import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
	return (
		<div className="weather">
			<div className="top">
				<div>
					<p className="city">{data.city}</p>
					<p className="weather-description">
						{(() => {
							switch (data.current_weather.weathercode) {
								case 0:
									return "Ясно";
								case 1:
									return "Преимущественно ясно";
								case 2:
									return "Переменная облачность";
								case 3:
									return "Пасмурно";
								default:
									return null;
							}
						})()}
					</p>
				</div>
				<img
					alt="weather"
					className="weather-icon"
					src={`icons/${data.current_weather.weathercode}.png`}
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
