import React from "react";
import '../css/ContainerBox_Lower.css'

export default function ContainerBox_Lower(props) {
    const {children} = props;
    return(
        <>
            <div id="containerbox-lower">
                {children}
            </div>
        </>
    )
}