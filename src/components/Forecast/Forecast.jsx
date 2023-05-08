import React from "react";
import { Card } from "antd";
import "./Forecast.css";

const WIDTH_MINI_ICON = "80px";

const Forecast = ({ data }) => (
	<Card title="Прогноз на неделю">
		<div
			className="container__table"
			style={{
				minWidth: "1030px",
				display: "flex",
				flexWrap: "wrap",
				textAlign: "center",
			}}
		>
			<Card.Grid>Дата</Card.Grid>
			{Array.from(data.daily.time).map((item, idx) => (
				<Card.Grid key={idx}>{item}</Card.Grid>
			))}

			<Card.Grid>Погода</Card.Grid>
			{Array.from(data.daily.weathercode).map((item, idx) => (
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
										<img
											src={`icons/${item}.png`}
											width={WIDTH_MINI_ICON}
											alt="Пасмурно"
										/>
									</>
								);
							case 45:
								return (
									<>
										<div>Туман</div>
										<img src={`icons/${item}.png`} width={WIDTH_MINI_ICON} alt="Туман" />
									</>
								);
							case 48:
								return (
									<>
										<div>Изморозь</div>
										<img
											src={`icons/${item}.png`}
											width={WIDTH_MINI_ICON}
											alt="Изморозь"
										/>
									</>
								);
							case 51 || 53 || 55:
								return (
									<>
										<div>Морось</div>
										<img src={`icons/53.png`} width={WIDTH_MINI_ICON} alt="Морось" />
									</>
								);
							case 61 || 63 || 65:
								return (
									<>
										<div>Дождь</div>
										<img src={`icons/63.png`} width={WIDTH_MINI_ICON} alt="Дождь" />
									</>
								);
							case 66 || 67:
								return (
									<>
										<div>Ледяной Дождь</div>
										<img
											src={`icons/66.png`}
											width={WIDTH_MINI_ICON}
											alt="Ледяной Дождь"
										/>
									</>
								);
							case 71 || 73 || 75:
								return (
									<>
										<div>Снежные зерна</div>
										<img
											src={`icons/71.png`}
											width={WIDTH_MINI_ICON}
											alt="Снежные зерна"
										/>
									</>
								);
							case 80 || 81 || 82:
								return (
									<>
										<div>Ливень</div>
										<img src={`icons/81.png`} width={WIDTH_MINI_ICON} alt="Ливень" />
									</>
								);
							case 85 || 86:
								return (
									<>
										<div>Снегопад</div>
										<img src={`icons/85.png`} width={WIDTH_MINI_ICON} alt="Снегопад" />
									</>
								);
							case 95 || 96 || 99:
								return (
									<>
										<div>Шторм</div>
										<img src={`icons/95.png`} width={WIDTH_MINI_ICON} alt="Шторм" />
									</>
								);

							default:
								return null;
						}
					})()}
				</Card.Grid>
			))}

			<Card.Grid>Максимальная температура</Card.Grid>
			{Array.from(data.daily.temperature_2m_max).map((item, idx) => (
				<Card.Grid key={idx}>{Math.round(item)}°C</Card.Grid>
			))}

			<Card.Grid>Минимальная температура</Card.Grid>
			{Array.from(data.daily.temperature_2m_min).map((item, idx) => (
				<Card.Grid key={idx}>{Math.round(item)}°C</Card.Grid>
			))}
		</div>
	</Card>
);

export default Forecast;
