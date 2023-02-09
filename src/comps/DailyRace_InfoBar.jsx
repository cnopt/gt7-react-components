import React from "react";
import '../css/DailyRace_InfoBar.css';

//todo make this modular as well so you can change the race details

export default function DailyRace_InfoBar(props) {
    const {children} = props;
    return(
        <>
            <div id="dailyrace-infobar">
                <div id="title-area">
                    <p id="title">Daily Races</p>
                    <p id="race-name">Race B</p>
                </div>
                <div id="info-area">
                    <table width="100%">
                        <tr>
                            <td className="entry-start">12:15</td>
                            <td className="entry-end">12:30</td>
                            <td className="time-req">15 Min(s)</td>
                            <td className="qual-time">--:--.--</td>
                        </tr>
                        <tr>
                            <th>Entry Period Starts</th>
                            <th>Entry Period Ends</th>
                            <th>Time Required</th>
                            <th>Qualifying Time</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}