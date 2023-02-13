import React                        from "react";
import CarColorBox                  from "./CarColorBox.jsx";
import CarNameAndColor              from "./CarNameAndColor.jsx";
import CarViewButtons               from "./CarViewButtons.jsx";
import Button_Dark_InvertOnHover    from "./Button_Dark_InvertOnHover.jsx";
import '../css/CarPurchaseBox.css';

export default function CarPurchaseBox(props) {
    const {car, color, credits} = props;
    return(
        <>
            <div id="carpurchase-box">
                <CarColorBox numColors="6" />
                <table>
                    <tr>
                        <CarNameAndColor car={car} color={color} />
                    </tr>
                    <tr id="second-row">
                        <CarViewButtons />
                        <Button_Dark_InvertOnHover>Learn More</Button_Dark_InvertOnHover>
                        <Button_Dark_InvertOnHover>Purchase</Button_Dark_InvertOnHover>
                    </tr>

                </table>
                
            </div>
        </>
    )
}