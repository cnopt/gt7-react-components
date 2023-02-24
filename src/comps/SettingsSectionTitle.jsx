import React from "react";
import '../css/SettingsSectionTitle.css'

export default function SettingsSectionTitle(props) {
    const {children} = props;
    return(
        <>
            <div id="settings-section-title">
                <p className="settings-setting-title">{children}</p>
            </div>
        </>
    )
}