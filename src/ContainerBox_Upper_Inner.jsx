import React from "react";
import "./css/ContainerBox_Upper_Inner.css";

export default function ContainerBox_Upper_Inner(props) {
    return(
        <>
            <div id="containerbox-upper-inner">
                {props.children}
            </div>
        </>
    )
}