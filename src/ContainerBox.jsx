import React from "react";
import './css/ContainerBox.css'

export default function ContainerBox(props) {
    const {children} = props;
    return(
        <>
            <div id="containerbox">
                {children}
            </div>
        </>
    )
}