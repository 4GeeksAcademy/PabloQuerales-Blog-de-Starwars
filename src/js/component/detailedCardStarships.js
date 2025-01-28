import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DetailedCardStarships = () => {
    const { store } = useContext(Context)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://www.pizzaraj.sk/wp-content/uploads/2016/03/800x600-ph-1.jpg" style={{ width: "400px" }} />
                </div>
                <div className="col-6">
                    <h1>{store.infoDetail.name}</h1>
                    <p >In the beginning there was nothing, then, through spontaneous generation, enters three beings. A Father, a Son, and a Daughter. The Daughter was of the light, the Son was of the dark, and the Father was charged with keeping the balance between the two. These beings had the ability to create life, and thus the Star Wars universe began.</p>
                </div>
            </div>
            <hr />
            <div className="row ">
                <div className="col-2">
                    <h3>Name</h3>
                    <p className="text-center">{store.infoDetail.name}</p>
                </div>
                <div className="col-2">
                    <h3>Passengers
                    </h3>
                    <p className="text-center">{store.infoDetail.passengers}</p>
                </div>
                <div className="col-2">
                    <h3>Length</h3>
                    <p className="text-center">{store.infoDetail.length}</p>
                </div>
                <div className="col-2">
                    <h3>Cargo Capacity</h3>
                    <p className="text-center">{store.infoDetail.cargo_capacity}</p>
                </div>
                <div className="col-2 ">
                    <h3>Cost In Credits</h3>
                    <p className="text-center">{store.infoDetail.cost_in_credits}</p>
                </div>
                <div className="col-2">
                    <h3>Manufacturer</h3>
                    <p className="text-center">{store.infoDetail.manufacturer}</p>
                </div>
            </div>
        </div>
    )
}