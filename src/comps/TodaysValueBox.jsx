import React from "react";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {AiFillCar} from "react-icons/ai";
import '../css/TodaysValueBox.css'

export default function TodaysValueBox(props) {
    const {tuningValue, bodyValue} = props;
    let combinedValue = (parseInt(tuningValue)+parseInt(bodyValue));
    let parsedValue = combinedValue.toLocaleString('en', {useGrouping:true})
    return(
        <>
            <div id="todaysvalue-box">
                <table>
                    <tr>
                        <th>
                            <p>Today's Valuation</p>
                            <div id="icons-div">
                                <HiWrenchScrewdriver/> + <AiFillCar/>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {parsedValue}
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}