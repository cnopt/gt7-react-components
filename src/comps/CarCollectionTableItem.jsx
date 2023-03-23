import React from "react";
import '../css/CarCollectionTableItem.css'

export default function CarCollectionTableItem(props) {
    const {car, year, miles, drivetrain, manufacturer, pp, category, power,
        weight, aspiration} = props;

    return(
        <>
            <tr>
                <td><img src="https://raw.githubusercontent.com/cnopt/gt7-assets/main/car/0008/1067/thumbnail/73_00.png" width="90px"/> {car}</td>
                <td>{manufacturer}</td>
                <td>{pp}</td>
                <td>{category}</td>
                <td>{drivetrain}</td>
                <td>{power}</td>
                <td>{weight}</td>
                <td>{aspiration}</td>
                <td>{year}</td>
                <td>{miles}</td>
            </tr>
        </>
    )
}