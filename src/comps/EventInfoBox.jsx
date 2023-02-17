import React from "react";
import EventInfoDescription from "./EventInfoDescription.jsx"
import EventRewardsTable from "./EventRewardsTable.jsx"
import '../css/EventInfoBox.css'

export default function EventInfoBox(props) {
    return(
        <>
            <div id="eventinfobox">
                <div id="eventinfo-header">
                    <p className="eventinfo-header-text">Event Info</p>
                </div>
                
                <div id="eventinfobox-inner">
                    <EventInfoDescription
                        desc="Try to finish with a Bronze or better!"
                        fail_cond="Going off the track / Colliding with a wall">
                    </EventInfoDescription>

                    <EventRewardsTable
                        goldTime="29.500"
                        goldReward="3,000"
                        silverTime="30.100"
                        silverReward="1,800"
                        bronzeTime="32.200"
                        bronzeReward="1,200"

                        bestRecord="29.111">
                    </EventRewardsTable>
                </div>
            </div>
        </>
    )
}