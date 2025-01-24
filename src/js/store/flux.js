import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			endPoints: ["people", "planets", "starships"],
			endPointPeople: "people",
			endPointPlanets: "planets",
			endPointStarships: "starships",
			infoDetail: ""
		},
		actions: {
			getInfoCard: async (endPoint) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					const response = await fetch(`https://www.swapi.tech/api/${endPoint}`, requestOptions);
					const result = await response.json();
					const detailedPeople = await Promise.all
						(
							result.results.map(async (personAllInfo) => {
								const detailResponse = await fetch(`${personAllInfo.url}`, requestOptions);
								const detailResult = await detailResponse.json();
								return detailResult.result.properties;
							})
						)
					setStore({ [endPoint]: detailedPeople })
				} catch (error) {
					console.error(error);
				}
			},
			getDetails: async (endPoint) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					const response = await fetch(`${endPoint}`, requestOptions);
					const result = await response.json();
					setStore({infoDetail: result.result.properties});
				} catch (error) {
					console.error(error);
				}
			},
		}
	}
}
export default getState;
