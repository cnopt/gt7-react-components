import React from "react";

export default function SettingsSectionTitle(props) {
    const {children} = props;
    return(
        <>
            <div id="settings-section-title">
                <p>{children}</p>
            </div>
        </>
    )
}