import React from "react";
import '../css/CarCollectionTable.css'


export default function CarCollectionTable(props) {
    const {children} = props;

    return(
        <>
            <table id="carcollection-table">
                <tr>
                    <th>Car</th>
                    <th>Manufacturer</th>
                    <th>PP</th>
                    <th>Category</th>
                    <th>Drivetrain</th>
                    <th>Power</th>
                    <th>Weight</th>
                    <th>Aspiration</th>
                    <th>Year</th>
                    <th>Distance Driven</th>
                </tr>
                {children}
            </table>
        </>
    )
}