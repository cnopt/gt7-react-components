import React from "react";
import '../css/TrackLayoutBox.css'

export default function TrackLayoutBox(props) {
    const {children,img, title, miles} = props;

    return(
        <>
            <div id="tracklayout-box">
                <div id="tracklayout-box-upper">
                    <img src={img} />
                </div>
                <div id="tracklayout-box-lower">
                    <p id="tracklayout-name">{title}</p>
                    <p id="tracklayout-length">{miles}</p>
                </div>
            </div>
        </>
    )
}