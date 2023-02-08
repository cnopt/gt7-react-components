import React from "react";
import './css/ContainerBox_Upper.css'

export default function ContainerBox_Upper(props) {
    const {children} = props;
    return(
        <>
            <div id="containerbox-upper">
                {children}
            </div>
        </>
    )
}