import React from "react";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import {AiFillCar} from "react-icons/ai";
import '../css/TuningValuationComboBox.css'

export default function TuningValuationComboBox(props) {
    const {tuningValue, bodyValue, variation} = props;
    return(
        <>
            <div id="tuningvaluation-combo-box">
                <div id="tuning-valuation">
                    <table>
                        <tr>
                            <th>
                                <HiWrenchScrewdriver/>
                                <p>Tuning Valuation</p>
                            </th>
                        </tr>
                        <tr>
                            <td>{tuningValue}</td>
                        </tr>
                    </table>
                </div>
                <div id="body-valuation">
                    <table>
                        <tr>
                            <th>
                                <AiFillCar/>
                                <p>Body Valuation</p>
                            </th>
                        </tr>
                        <tr>
                            <td>{bodyValue}</td>
                        </tr>
                    </table>
                </div>
                <p id="variation">Variation from yesterday <span>{variation}</span></p>
            </div>
        </>
    )
}