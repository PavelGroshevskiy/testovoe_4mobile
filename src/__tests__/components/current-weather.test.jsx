import React from "react";
import { shallow } from "enzyme";
import CurrentWeather from "../../components/current-weather/Current-Weather";

describe("CurrentWeather component test", () => {
	test("should render current weather", () => {
		const wrapper = shallow(<CurrentWeather />);
		expect(wrapper.find("p.city")).toHaveLength(1);
	});

	test("should render component current weather", () => {
		const data = {
			city: "Novokuznetsk",
			current_weather: {
				temperature: "20",
			},
		};

		const wrapper = shallow(<CurrentWeather data={data} />);

		expect(wrapper.find("p.city").text()).toBe(data.city);
		expect(wrapper.find("p.temperature").text()).toBe(
			`${data.current_weather.temperature}°C`
		);
	});
});
