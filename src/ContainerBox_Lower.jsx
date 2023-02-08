import React from "react";

export default function ContainerBox_Lower(props) {
    const {children} = props;
    return(
        <>
            <div class="containerbox-lower">
                {children}
            </div>
        </>
    )
}