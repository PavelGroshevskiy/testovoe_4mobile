import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = React.useState(null);

	const loadOptions = (inputValue) => {
		if (inputValue === "") {
			return Promise.resolve({ options: [] });
		} else {
			return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}`)
				.then((response) => response.json())
				.then((response) => {
					if (!response.results) {
						return { options: [] };
					}
					return {
						options: response.results.map((city) => {
							return {
								value: [city.latitude, city.longitude],
								label: `${city.name}`,
							};
						}),
					};
				});
		}
	};

	const handleChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder="Введите название города"
			debounceTimeout={600}
			value={search}
			onChange={handleChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
