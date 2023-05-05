import axios from "axios";

class CityService {
	static async getCity() {
		const response = await axios.get(
			`https://geocoding-api.open-meteo.com/v1/search?name=%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B7`
		);
		// console.log(response.data);
		return response.data;
	}
}

export default CityService;
