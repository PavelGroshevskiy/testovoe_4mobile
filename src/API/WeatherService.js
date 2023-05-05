import axios from "axios";

class WeatherService {
	static async getWeather(latitude, longitude, currentWeather = true) {
		const response = await axios.get(
			`https://api.open-meteo.com/v1/forecast`,

			{
				params: {
					latitude: latitude,
					longitude: longitude,
					current_weather: currentWeather,
				},
			}
		);

		return response.data;
	}
}

export default WeatherService;
