import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const InfoItem = () => {
    const { store, actions } = useContext(Context)



    return (
        <div class="jumbotron container">
            <h1 class="display-4">{store.infoDetail.name}</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    )
}