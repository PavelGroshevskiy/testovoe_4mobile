import React from "react";
import { Accordion } from "react-accessible-accordion";
import "./Forecast.css";

const Forecast = ({ data }) => {
	return (
		<>
			<label className="title">Daily</label>
			<Accordion allowZeroExpanded>
				{data &&
					Object.entries(data.daily).map(([label, item], idx) => {
						console.log(item[idx]);
					})}
			</Accordion>
		</>
	);
};

export default Forecast;
