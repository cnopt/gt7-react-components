import React from "react";
import '../css/SettingsItem.css'
import MenuRadioToggleSwitch from "./MenuRadioToggleSwitch";

export default function SettingsItem(props) {
    const {type, desc, value} = props;
    return(
        <>
            <div className="settings-item">
                <div className="settings-item-inner">
                    <div className="settings-item-values">
                        <p className="settings-item-desc">{desc}</p>
                        <p className="settings-item-val">{value}</p>
                    </div>
                    <div className="settings-item-button">
                        <MenuRadioToggleSwitch/>
                    </div>
                </div>
            </div>
        </>
    )
}