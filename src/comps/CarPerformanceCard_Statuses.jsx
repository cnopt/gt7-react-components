import React from "react";
import '../css/CarPerformanceCard_Statuses.css'
import {SlSpeedometer} from "react-icons/sl";
import {RiOilLine} from "react-icons/ri";
import {TbEngine} from "react-icons/tb";
import {AiOutlineWarning} from "react-icons/ai";

export default function CarPerformanceCard_Statuses(props) {
    const {miles, engine_status, oil_status, warning_status} = props;

    return(
        <>
            <div id="carperformance-card-statuses">
                <tr>
                    <p className="miles">
                        <SlSpeedometer/>
                        {miles}
                    </p>
                    <p className="oilstatus green">
                        <RiOilLine/>
                        {oil_status}
                    </p>
                    <p className="enginestatus green">
                        <TbEngine/>
                        {engine_status}
                    </p>
                    <p className="warningstatus green">
                        <AiOutlineWarning/>
                        {warning_status}
                    </p>
                </tr>
            </div>
        </>
    )
}