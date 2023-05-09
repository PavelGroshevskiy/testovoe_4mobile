import WeatherService from "../../API/WeatherService";

describe("weatherService test", () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	test("should return response.data", (done) => {
		const fetchResponse = {
			is_day: 1,
		};
		fetch.mockResponse(JSON.stringify(fetchResponse));
		const result = WeatherService.getWeather({ latitude: 41, longitude: 50 });
		expect(result).toEqual(expect.any(Promise));
		result.then((data) => {
			expect(data.current_weather.is_day).toBe(fetchResponse.is_day);
			done();
		});
	});
});
