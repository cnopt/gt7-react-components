import React from "react";
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
                    <p id="miles">{miles}</p>
                    <p id="oil">{oil_status}</p>
                    <p id="engine">{engine_status}</p>
                    <p id="warning">{warning_status}</p>
                </div>
            </div>
        </>
    )
}