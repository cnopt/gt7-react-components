import React from "react";

export default function ContainerBox_Upper(props) {
    const {children} = props;
    return(
        <>
            <div class="containerbox-upper">
                {children}
            </div>
        </>
    )
}