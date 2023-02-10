import React from "react";
import '../css/CarValuationTableItem.css';

export default function CarValuationTableItem(props) {
    const {manufacturer, valuation, variation, children} = props;
    return(
        <>
            <tr id="carvaluation-table-item">
                <div className="car-details">
                    <td className="manufacturer">{manufacturer}</td>
                    <td className="car">{children}</td>
                </div>
                <div className="valuation-details">
                    <td className="valuation-heading">Body Valuation</td>
                    <td className="valuation">{valuation}</td>
                </div>
                <div className="variation-details">
                    <td className="variation-heading">Variation</td>
                    <td className="variation">{variation}</td>
                </div>
            </tr>
        </>
    )
}