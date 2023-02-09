import React from "react";
import '../css/TrackLayoutHorizontalContainer.css'
import '../css/TrackConditionsBox.css';

export default function TrackConditionsBox(props) {
    const {children, conditions, time, title} = props;
    return(
        <>
            <div id="trackconditions-box">
                <div id="trackconditions-box-left">
                    <p id="title">{title}</p>
                    <p id="time">{time}</p>
                </div>
                <div id="trackconditions-box-right">
                    <p id="conditions">{conditions}</p>
                </div>
            </div>
        </>
    )
}