import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
    // if ("A planet.") {
    //     "info-planet"
    // } else if ("A Starship") {
    //     "info-starship"
    // } else if ("A person within the Star Wars universe") {
    //     "info-people"
    // }
    return (
        <div className="card" style={{ width: "18rem" }} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnx2mHFJ6WCHnhWVRO3Ge2BoqECvXwgmjhWw&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    {/* <Link to={`${}/${props.uid}`} ><button className="btn btn-primary">Learn More!</button></Link>
                    <i className="bi bi-heart btn border"></i> */}
                </div>
            </div>
        </div >
    )
}