import React from "react";
import { shallow } from "enzyme";
import CurrentWeather from "../../components/current-weather/Current-Weather";

describe("CurrentWeather component test", () => {
	test("should render current weather", () => {
		const wrapper = shallow(<CurrentWeather />);
		expect(wrapper).toHaveLength(1);
	});
});
