import React from "react";
import '../css/TrackMenuLeaderboardItem.css';
import * as flags from "country-flag-icons/react/3x2"


export default function TrackMenuLeaderboardItem(props) {
    const {name, pos, country, time} = props;
    return(
        <>
            <div id="trackmenuleaderboard-item">
                <tr>
                    <td className="pos">{pos}</td>
                    <td className="name">{name}</td>
                    <td className="country">{React.createElement(flags.GB)}</td>
                    <td className="time">{time}</td>
                </tr>
            </div>
        </>
    )
}