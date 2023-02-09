import React from "react";
import '../css/ContainerBox_Upper_Inner_Scrollable.css'

export default function ContainerBox_Upper_Inner_Scrollable(props) {
    return(
        <>
            <div id="containerbox-upper-inner-scrollable">
                {props.children}
            </div>
        </>
    )
}