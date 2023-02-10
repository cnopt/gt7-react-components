import React from "react";
import {SlSpeedometer} from "react-icons/sl";
import {RiOilLine} from "react-icons/ri";
import {TbEngine} from "react-icons/tb";
import {AiOutlineWarning} from "react-icons/ai";
import '../css/Garage_CarInfoTable.css';

export default function Garage_CarInfoTable(props) {
    const { manufacturer, car, pp, displacement, drivetrain,
            maxpower, maxtorque, weight, aspiration, miles,
            oil_status, engine_status, warning_status } = props;
    return(
        <>
            <div id="garage-carinfotable">
                <div id="garage-carinfotable-upper">
                    <p id="manufacturer">{manufacturer}</p>
                    <p id="car">{car}</p>
                    <p id="pp">{pp}</p>
                </div>
                <div id="garage-carinfotable-middle">
                    <table>
                        <tr>
                            <th>Displacement</th>
                            <td>{displacement}</td>
                        </tr>
                        <tr>
                            <th>Drivetrain</th>
                            <td>{drivetrain}</td>
                        </tr>
                        <tr>
                            <th>Max. Power</th>
                            <td>{maxpower}</td>
                        </tr>
                        <tr>
                            <th>Max. Torque</th>
                            <td>{maxtorque}</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{weight}</td>
                        </tr>
                        <tr>
                            <th>Aspiration</th>
                            <td>{aspiration}</td>
                        </tr>
                    </table>
                </div>
                <div id="garage-carinfotable-lower">
                    <p id="miles">
                        <span className="icon"><SlSpeedometer/></span>
                        {miles}
                    </p>
                    <p id="oil">
                        <span className="icon"><RiOilLine/></span>
                        {oil_status}
                    </p>
                    <p id="engine">
                        <span className="icon"><TbEngine/></span>
                        {engine_status}
                    </p>
                    <p id="warning">
                        <span className="icon"><AiOutlineWarning/></span>
                        {warning_status}
                    </p>
                </div>
            </div>
        </>
    )
}