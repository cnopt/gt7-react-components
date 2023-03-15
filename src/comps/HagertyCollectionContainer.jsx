import React from "react";

export default function HagertyCollectionContainer(props) {
    return(
        <>
            <div className="hagertycollection-container">
                {props.children}
            </div>
        </>
    )
}