import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const [likeButton, setLikeButton] = useState("bi-heart")
    const [likeValidator, setLikeValidator] = useState(false)
    const [typeView, setTypeView] = useState("camilo")

    const { store, actions } = useContext(Context)
    const handleClick = () => {
        actions.getDetails(props.url)
    }
    const favoriteList = () => {
        if (!likeValidator) {
            actions.setFavoriteArray(props.name);
            setLikeButton("bi-heart-fill")
            setLikeValidator(true)
        } else {
            actions.deleteFavorite(props.name);
            setLikeButton("bi-heart")
            setLikeValidator(false)
        }
    }
    useEffect(() => {
        if (!store.favoriteArray.includes(props.name)) {
            store.favoriteArray
            setLikeValidator(false)
            setLikeButton("bi-heart")
        };
        if (store.people.find(item => item.properties.name == props.name)) {
            setTypeView("people")
        } else if (store.planets.find(item => item.properties.name == props.name)) {
            setTypeView("planets")
        } else if (store.starships.find(item => item.properties.name == props.name)) {
            setTypeView("starships")
        }
    }, [store.favoriteArray])

    return (
        <div className="card m-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnx2mHFJ6WCHnhWVRO3Ge2BoqECvXwgmjhWw&s" loading="lazy" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>{props.gender}</p>
                <p>{props.eye_color}</p>
                <p>{props.hair_color}</p>
                <p>{props.population}</p>
                <p>{props.terrain}</p>
                <p>{props.climate}</p>
                <p>{props.passengers}</p>
                <p>{props.model}</p>
                <p>{props.cargo_capacity}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`info/${typeView}/${props.uid}`} ><button className="btn btn-primary" onClick={handleClick}>Learn More!</button></Link>
                    <i className={`bi ${likeButton}`} onClick={favoriteList}></i>
                </div>
            </div>
        </div >
    )
}