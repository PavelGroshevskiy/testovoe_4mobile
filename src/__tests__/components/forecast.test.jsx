import React from "react";
import { shallow, mount } from "enzyme";
import Forecast from "../../components/Forecast/Forecast";

describe("Forecast component test", () => {
	test("should render forecast", () => {
		const wrapper = shallow(<Forecast />);
		expect(wrapper).toHaveLength(1);
	});

	test("should render component forecast weather", () => {
		const data = {
			daily: {
				time: ["2023-05-09"],
			},
		};

		const wrapper = mount(<Forecast data={data} />);

		expect(wrapper.find("div.ant-card-grid.time").text()).toBe(data.daily.time[0]);
	});
});
