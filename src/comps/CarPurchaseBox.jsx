import React                from "react";
import CarColorBox          from "./CarColorBox.jsx";
import CarNameAndColor      from "./CarNameAndColor.jsx";
import CarViewButtons       from "./CarViewButtons.jsx";

export default function CarPurchaseBox(props) {
    const {car, color, credits} = props;
    return(
        <>
            <div id="carpurchase-box">
                <CarColorBox numColors="6" />
                <CarNameAndColor car={car} color={color} />
                <CarViewButtons />
            </div>
        </>
    )
}