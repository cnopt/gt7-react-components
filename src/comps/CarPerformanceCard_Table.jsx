import React from "react";
import '../css/CarPerformanceCard_Table.css';

export default function CarPerformanceCard_Table(props) {
    const {displacement, drivetrain, weight, maxpower, maxtorque,
        weight2power, oil_status, engine_status, warning_status, miles} = props;
    return(
        <>
            <div id="carperformance-card-table">
                <table>
                    <tr>
                        <th>Specs</th>
                    </tr>
                    <tr>
                        <th>Displacement</th>
                        <tr>{displacement}</tr>
                    </tr>
                    <tr>
                        <th>Drivetrain</th>
                        <tr>{drivetrain}</tr>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <tr>{weight}</tr>
                    </tr>
                    <tr>
                        <th>Max. Power</th>
                        <tr>{maxpower}</tr>
                    </tr>
                    <tr>
                        <th>Max. Torque</th>
                        <tr>{maxtorque}</tr>
                    </tr>
                    <tr>
                        <th>Weight-to-Power Ratio</th>
                        <tr>{weight2power}</tr>
                    </tr>
                    <tr>
                        <th>Condition</th>
                    </tr>
                    <tr>
                        <p>{miles}</p>
                        <p>{oil_status}</p>
                        <p>{engine_status}</p>
                        <p>{warning_status}</p>
                    </tr>
                </table>
            </div>
        </>
    )
}