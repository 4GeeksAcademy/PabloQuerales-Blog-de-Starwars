import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getInfoCard(store.endPointPeople)
		actions.getInfoCard(store.endPointPlanets)
		actions.getInfoCard(store.endPointStarships)
	}, [])
	return (
		<div className="container">
			<div className="row">
				<h2>Personajes</h2>
				{store.people.map((people) => {
					return (
						<Card name={people.name} uid={people.uid} url={people.url} gender={`Gender: ${people.gender}`}
							hair_color={`Hair Color: ${people.hair_color}`}
							eye_color={`Eye Color: ${people.eye_color}`}
						/>
					)
				})}
			</div>
			<div className="row">
				<h2>Planetas</h2>
				{store.planets.map((planet) => {
					return (
						<Card name={planet.name} uid={planet.uid} url={planet.url}
							population={`Population: ${planet.population}`}
							terrain={`Terrain: ${planet.terrain}`}
							climate={`Climate: ${planet.climate}`} />
					)
				})}
			</div>
			<div className="row">
				<h2>Naves</h2>
				{store.starships.map((starship) => {
					return (
						<Card name={starship.name} uid={starship.uid} url={starship.url}
						passengers={`Passengers: ${starship.passengers}`}
						model={`Model: ${starship.model}`}
						cargo_capacity={`Cargo Capacity: ${starship.cargo_capacity}`}/>
					)
				})}
			</div>
		</div>
	)
} 
