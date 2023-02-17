import React from "react";
import SettingsSectionTitle from './SettingsSectionTitle.jsx';
import SettingsItem from './SettingsItem.jsx';

export default function SettingsBox(props) {
    const {setting, children} = props;
    return(
        <>
            <div id="settings-box">
                <p>{setting}</p>
                <SettingsSectionTitle>Ghost Display</SettingsSectionTitle>
                <SettingsItem 
                    type="radio"
                    desc="Display Personal Best Ghost"
                    value="on">
                </SettingsItem>
            </div>
        </>
    )
}