import React from "react";
import '../css/Button_Dark_InvertOnHover.css';

export default function Button_Dark_InvertOnHover(props) {
    const {children} = props
    return(
        <>
            <div id="button-dark-invertonhover">
                <button>{children}</button>
            </div>
        </>
    )
}