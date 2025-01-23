import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			endPointPeople: "people",
			endPointPlanets: "planets",
			endPointStarships: "starships",
			detailsId: []
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
					setStore({ [endPoint]: result.results })
					const store = getStore()
					const uid = store.people.map((e) => {return e.uid})
					console.log(uid);
					
				} catch (error) {
					console.error(error);
				}
			},
			getDetailPeoples: async (endPoint, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				try {
					const response = await fetch(`https://www.swapi.tech/api/${endPoint}/${id}`, requestOptions);
					const result = await response.json();
					console.log(result)
				} catch (error) {
					console.error(error);
				}
			},
		}
	}
}
export default getState;
