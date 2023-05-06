import axios from "axios";

class WeatherService {
	static async getWeather({
		latitude,
		longitude,
		currentWeather = true,
		timezone = "GMT",
		daily = "temperature_2m_max,temperature_2m_min,weathercode",
	} = {}) {
		const response = await axios.get(
			`https://api.open-meteo.com/v1/forecast`,

			{
				params: {
					latitude: latitude,
					longitude: longitude,
					current_weather: currentWeather,
					timezone: timezone,
					daily: daily,
				},
			}
		);

		return response.data;
	}
}

export default WeatherService;
