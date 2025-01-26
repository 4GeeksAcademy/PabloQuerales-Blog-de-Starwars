import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {

    const {store, actions} = useContext(Context)
    const handleClick = () => {
        actions.getDetails(props.url)
    }
    const favoriteList = ()=>{
        actions.setFavoriteArray(props.name);
        
    }

    return (
        <div className="card" style={{ width: "18rem" }} >
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
                    <Link to={`info/${props.gender}/${props.terrain}`} ><button className="btn btn-primary" onClick={handleClick}>Learn More!</button></Link>
                    <i className="bi bi-heart btn border" onClick={favoriteList}></i>
                </div>
            </div>
        </div >
    )
}