import React from "react";
import { DetailedCardPeople } from "../component/detailedCardPeople";
import { DetailedCardPlanets } from "../component/detailedCardPlanets";
import { DetailedCardStarships } from "../component/detailedCardStarships";
import { useLocation } from "react-router-dom";

export const InfoItem = () => {

    const path = useLocation()
    if (path.pathname.includes("people")) {
        return <DetailedCardPeople />
    } else if (path.pathname.includes("planets")) {
        return <DetailedCardPlanets />
    } else if (path.pathname.includes("starships")) {
        return <DetailedCardStarships />
    }
}