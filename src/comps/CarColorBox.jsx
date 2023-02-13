import React from "react";
import '../css/CarColorBox.css'

export default function CarColorBox(props) {
    const {numColors} = props;
    return(
        <>
            <div id="carcolor-box">
                <div id="color"></div>
                <p id="color-text">Colour(s): {numColors}</p>
            </div>
        </>
    )
}