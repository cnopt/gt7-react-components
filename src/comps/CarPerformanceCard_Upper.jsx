import React from "react";
import '../css/CarPerformanceCard_Upper.css';
import {JP} from "country-flag-icons/react/3x2"

export default function CarPerformanceCard_Upper(props) {
    const {manufacturer, car, img, pp, engine} = props;
    return(
        <>
            <div id="carperformance-card-upper">
                <div id="car-details-row">
                    <p className="manufacturer">
                        <span className="flag"><JP/></span>
                        {manufacturer}
                    </p>
                    <p className="pp filled">{pp}</p>
                </div>
                <div id="car-img">
                    <img src={img}/>
                </div>
                
                <p className="car">{car}</p>
                <p className="engineModel"><span>Engine Model </span>{engine}</p>
            </div>
        </>
    )
}