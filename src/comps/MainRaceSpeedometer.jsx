import React from "react";
import '../css/MainRaceSpeedometer.css'

export default function MainRaceSpeedometer(props) {
    const {speed, gear, throttle, brake, rpm} = props;
    return(
        <>
            <div id="mainracespeedo-container">
                <div id="mainracespeedo-inner">
                    <div id="left-area">
                        <div id="brake-container">
                            <div id="brake-value"></div>
                        </div>
                    </div>
                    <div id="heading-container">
                            <div id="heading-value"></div>
                    </div>
                    <div id="upper-area">
                        <div id="rpm-container">
                            <div id="rpm-value"></div>
                        </div>
                    </div>
                    <div id="lower-area">
                        <div id="speed-container">
                            <div id="speed-value">{speed}</div>
                            <div id="speed-units">mph</div>
                        </div>
                        <div id="gear-container">
                            <div id="gear-value">{gear}</div>
                        </div>
                    </div>
                    <div id="right-area">
                        <div id="throttle-container">
                            <div id="throttle-value"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}