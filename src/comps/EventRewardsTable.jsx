import React from "react";
import '../css/EventRewardsTable.css';
import {FaTrophy} from "react-icons/fa"

export default function EventRewardsTable(props) {
    const {goldTime, silverTime, bronzeTime, bestRecord,
           goldReward, silverReward, bronzeReward} = props;

    return(
        <>
            <div id="eventrewardstable">
                <p className="title">Rewards</p>
                <table>
                    <tr>
                        <th className="goldTime">
                            <FaTrophy/>
                            {goldTime}
                        </th>
                        <td className="goldReward">{goldReward}</td>
                    </tr>
                    <tr>
                        <th className="silverTime">
                            <FaTrophy/>
                            {silverTime}
                        </th>
                        <td className="silverReward">{silverReward}</td>
                    </tr>
                    <tr>
                        <th className="bronzeTime">
                            <FaTrophy/>
                            {bronzeTime}
                        </th>
                        <td className="bronzeReward">{bronzeReward}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}