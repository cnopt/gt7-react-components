import React from "react";
import '../css/CarValuation.css';

export default function CarValuation(props) {
    return(
        <>
            <table id="carvaluation-table">
                {props.children}
            </table>
        </>
    )
}