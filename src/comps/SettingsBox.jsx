import React from "react";
import SettingsSectionTitle from './SettingsSectionTitle.jsx';
import SettingsItem from './SettingsItem.jsx';
import '../css/SettingsBox.css';
import classNames from "classnames";

export default function SettingsBox(props) {
    const {setting, children, scrollable} = props;
    return(
        <>
            <div id="settings-box">
                <p className="settings-box-title">{setting}</p>
                {/* add scrollable class to the div if scrollable prop is passed to Component */}
                <div className={classNames("settings-box-inner", {
                    scrollable: scrollable
                })}>
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
            </div>
        </>
    )
}