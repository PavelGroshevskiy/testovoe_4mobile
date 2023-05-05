import React from "react";

function useFetching(callback) {
	const [isLoading, setIsLoadung] = React.useState(false);
	const [error, setError] = React.useState("");

	const fetching = async () => {
		try {
			setIsLoadung(true);
			await callback();
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoadung(true);
		}
	};
	return [fetching, isLoading, error];
}

export default useFetching;
