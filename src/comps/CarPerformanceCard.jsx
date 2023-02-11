import React from "react";
import '../css/CarPerformanceCard.css';

export default function CarPerformanceCard(props) {
    return(
        <>
            <div id="carperformance-card">
                {props.children}
            </div>
        </>
    )
}