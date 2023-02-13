import React from "react";
import '../css/CarNameAndColor.css'

export default function CarNameAndColor(props) {
    const {car, color} = props;
    return(
        <>
            <div id="carnameandcolor-box">
                <p id="car-name">{car}</p>
                <p id="car-color">{color}</p>
            </div>
        </>
    )
}