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
						<Card name={people.name} uid={people.uid} url={people.url} />
					)
				})}
			</div>
			<div className="row">
				<h2>Planetas</h2>
				{store.planets.map((planet) => {
					return (
						<Card name={planet.name} uid={planet.uid} url={planet.url} />
					)
				})}
			</div>
			<div className="row">
				<h2>Naves</h2>
				{store.starships.map((starship) => {
					return (
						<Card name={starship.name} uid={starship.uid} url={starship.url} />
					)
				})}
			</div>
		</div>
	)
} 
