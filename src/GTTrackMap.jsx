import React from "react";
import './css/GTTrackMap.css';

export default function GTTrackMap(props) {
    const {img, children} = props;
    return(
        <>
            <div id="trackmap-container">
                <img src={img}/>
            </div>
        </>
    )
}