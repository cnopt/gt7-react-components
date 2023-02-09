import React from "react";
import '../css/ContainerBox_Lower_Inner.css'

export default function ContainerBox_Lower_Inner(props) {
    const {children} = props;
    return(
        <>
            <div id="containerbox-lower-inner">
                {children}
            </div>
        </>
    )
}