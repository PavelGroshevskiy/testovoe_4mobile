import React from "react";
import { Card } from "antd";
import "./Forecast.css";

const Forecast = ({ data }) => (
	<Card title="Прогноз на неделю" style={{ marginTop: 60 + "px" }}>
		<div
			style={{
				maxWidth: "100%",
				display: "flex",
				flexWrap: "wrap",
				textAlign: "center",
			}}
		>
			<Card.Grid>Дата</Card.Grid>
			{data &&
				Array.from(data.daily.time).map((item, idx) => (
					<Card.Grid key={idx}>{item}</Card.Grid>
				))}

			<Card.Grid>Погода</Card.Grid>
			{data &&
				Array.from(data.daily.weathercode).map((item, idx) => (
					<Card.Grid key={idx}>
						{(() => {
							switch (item) {
								case 0:
									return (
										<>
											<div>Ясно</div>
											<img src={`icons/${item}.png`} alt="Ясно" width={"80px"} />
										</>
									);
								case 1:
									return (
										<>
											<div>Преимущ-но ясно</div>
											<img
												src={`icons/${item}.png`}
												alt="Преимущественно ясно"
												width={"80px"}
											/>
										</>
									);
								case 2:
									return (
										<>
											<div>Переменная облачность</div>
											<img
												src={`icons/${item}.png`}
												alt="Переменная облачность"
												width={"80px"}
											/>
										</>
									);
								case 3:
									return (
										<>
											<div>Пасмурно</div>
											<img src={`icons/${item}.png`} width={"80px"} />
										</>
									);
								case 45:
									return (
										<>
											<div>Туман</div>
											<img src={`icons/${item}.png`} width={"80px"} />
										</>
									);
								case 48:
									return (
										<>
											<div>Изморозь</div>
											<img src={`icons/${item}.png`} width={"80px"} />
										</>
									);
								case 51 || 53 || 55:
									return (
										<>
											<div>Морось</div>
											<img src={`icons/${53}.png`} width={"80px"} />
										</>
									);
								case 61 || 63 || 65:
									return (
										<>
											<div>Дождь</div>
											<img src={`icons/${63}.png`} width={"80px"} />
										</>
									);
								case 66 || 67:
									return (
										<>
											<div>Ледяной Дождь</div>
											<img src={`icons/${63}.png`} width={"80px"} />
										</>
									);
								case 71 || 73 || 75:
									return (
										<>
											<div>Снег</div>
											<img src={`icons/${48}.png`} width={"80px"} />
										</>
									);
								case 71 || 73 || 75:
									return (
										<>
											<div>Снежные зерна</div>
											<img src={`icons/${48}.png`} width={"80px"} />
										</>
									);
								case 80 || 81 || 82:
									return (
										<>
											<div>Ливень</div>
											<img src={`icons/${81}.png`} width={"80px"} />
										</>
									);
								case 85 || 86:
									return (
										<>
											<div>Снегопад</div>
											<img src={`icons/${48}.png`} width={"80px"} />
										</>
									);
								case 95 || 96 || 99:
									return (
										<>
											<div>Шторм</div>
											<img src={`icons/${81}.png`} width={"80px"} />
										</>
									);

								default:
									return null;
							}
						})()}
					</Card.Grid>
				))}

			<Card.Grid>Максимальная температура</Card.Grid>
			{data &&
				Array.from(data.daily.temperature_2m_max).map((item, idx) => (
					<Card.Grid key={idx}>{Math.round(item)}°C</Card.Grid>
				))}

			<Card.Grid>Минимальная температура</Card.Grid>
			{data &&
				Array.from(data.daily.temperature_2m_min).map((item, idx) => (
					<Card.Grid key={idx}>{Math.round(item)}°C</Card.Grid>
				))}
		</div>
	</Card>
);

export default Forecast;
