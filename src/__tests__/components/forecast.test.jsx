import React from "react";
import { shallow } from "enzyme";
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

		const wrapper = shallow(<Forecast data={data} />);

		expect(wrapper.find("div.ant-card-grid").first()).toBe(data.daily.time);
	});
});
