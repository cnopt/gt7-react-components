import React from "react";

export default function ContainerBox(props) {
    const {children} = props;
    return(
        <>
            <div class="containerbox">
                {children}
            </div>
        </>
    )
}