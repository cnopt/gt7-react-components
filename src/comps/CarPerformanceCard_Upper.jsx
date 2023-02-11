import React from "react";
import '../css/CarPerformanceCard_Upper.css';
import {JP} from "country-flag-icons/react/3x2"

export default function CarPerformanceCard_Upper(props) {
    const {manufacturer, car, img, pp, engine} = props;
    return(
        <>
            <div id="carperformance-card-upper">
                <p className="manufacturer">
                    <span className="flag"><JP/></span>
                    {manufacturer}
                </p>
                <p>{pp}</p>
                <p>Engine Model <span>{engine}</span></p>
            </div>
        </>
    )
}