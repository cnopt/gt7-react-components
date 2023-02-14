import React from "react";
import TrackMenuLeaderboardItem from "./TrackMenuLeaderboardItem";
import '../css/TrackMenuLeaderboard.css'

export default function TrackMenuLeaderboard(props) {
    return(
        <>  
            <div id="trackmenuleaderboard">
                <table>
                    <TrackMenuLeaderboardItem name="cnopt" pos="1" country="gb" time="0:29.111"></TrackMenuLeaderboardItem>
                    <TrackMenuLeaderboardItem name="TRAUME65" pos="2" country="de" time="0:32.459"></TrackMenuLeaderboardItem>
                    <TrackMenuLeaderboardItem name="jnopt" pos="3" country="de" time="0:32.788"></TrackMenuLeaderboardItem>
                    <TrackMenuLeaderboardItem name="yxa" pos="4" country="de" time="0:33.120"></TrackMenuLeaderboardItem>
                    <TrackMenuLeaderboardItem name="tomrocks122" pos="5" country="de" time="0:38.422"></TrackMenuLeaderboardItem>
                </table>
            </div>
        </>
    )
}