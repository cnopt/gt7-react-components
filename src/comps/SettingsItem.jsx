import React from "react";

export default function SettingsItem(props) {
    const {type, desc, value} = props;
    return(
        <>
            <div id="settings-item">
                <p>{desc}</p>
                <p>{value}</p>
            </div>
        </>
    )
}