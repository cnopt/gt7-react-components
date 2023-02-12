import React from "react";
import '../css/CarPerformanceCard_Table.css';
import CarPerformanceCard_Statuses from "./CarPerformanceCard_Statuses.jsx";

export default function CarPerformanceCard_Table(props) {
    const {displacement, drivetrain, weight, maxpower, maxtorque,
        weight2power, oil_status, engine_status, warning_status, miles} = props;
    return(
        <>
            <div id="carperformance-card-table">
                <table>
                    <tr>
                        <th className="header-separator">Specs</th>
                    </tr>
                    <tr>
                        <th>Displacement</th>
                        <td className="displacement">{displacement}</td>
                    </tr>
                    <tr>
                        <th>Drivetrain</th>
                        <td className="drivetrain">{drivetrain}</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td className="weight">{weight}</td>
                    </tr>
                    <tr>
                        <th>Max. Power</th>
                        <td className="maxpower">{maxpower}</td>
                    </tr>
                    <tr>
                        <th>Max. Torque</th>
                        <td className="maxtorque">{maxtorque}</td>
                    </tr>
                    <tr>
                        <th>Weight-to-Power Ratio</th>
                        <td className="weight2power">{weight2power}</td>
                    </tr>
                    <tr>
                        <th className="header-separator">Condition</th>
                    </tr>
                    <CarPerformanceCard_Statuses
                        oil_status="Excellent" 
                        engine_status="Excellent" 
                        warning_status="Excellent" 
                        miles="17">
                    </CarPerformanceCard_Statuses>
                </table>
            </div>
        </>
    )
}