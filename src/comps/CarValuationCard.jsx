import React from "react";
import '../css/CarValuationCard.css';
import Button from '../comps/Button'
import {SlSpeedometer} from "react-icons/sl";

export default function CarValuationCard(props) {
    const {manufacturer, car, img, pp, miles} = props;
    return(
        <>
            <div id="carvaluation-card">
                <div id="car-img">
                    <img src={img}/>
                </div>
                <div id="car-details">
                    <p className="manufacturer">{manufacturer}</p>
                    <p className="car">{car}</p>
                    <p className="pp">{pp}</p>
                    <p className="miles"><SlSpeedometer/>{miles}</p>
                </div>
                <Button>Appraise</Button>
            </div>
        </>
    )
}