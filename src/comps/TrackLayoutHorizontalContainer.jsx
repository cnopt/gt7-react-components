import React from "react";
import '../css/TrackLayoutHorizontalContainer.css'

export default function TrackLayoutHorizontalContainer(props) {
    const {children} = props;
    return(
        <>
            <div id="tracklayout-horizontal-container">
                {children}
            </div>
        </>
    )
}