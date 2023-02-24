import React from "react";
import SettingsSectionTitle from './SettingsSectionTitle.jsx';
import SettingsItem from './SettingsItem.jsx';
import '../css/SettingsBox.css'

export default function SettingsBox(props) {
    const {setting, children} = props;
    return(
        <>
            <div id="settings-box">
                <p className="settings-box-title">{setting}</p>
                <SettingsSectionTitle>Ghost Display</SettingsSectionTitle>
                <SettingsItem 
                    type="radio"
                    desc="Display Personal Best Ghost"
                    value="on">
                </SettingsItem>
                <SettingsItem 
                    type="radio"
                    desc="Display Personal Best Ghost"
                    value="on">
                </SettingsItem>
                <SettingsItem 
                    type="radio"
                    desc="Display Personal Best Ghost"
                    value="on">
                </SettingsItem>
            </div>
        </>
    )
}