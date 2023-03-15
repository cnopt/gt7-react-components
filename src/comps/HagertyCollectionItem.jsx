import React from "react";
import '../css/HagertyCollectionItem.css'

export default function HagertyCollectionItem(props) {
    const {manufacturer, car, id, miles, credits, year} = props;
    return(
        <>
            <div className="hagertycollection-item">
                <div className="car-details">
                    <img src="https://raw.githubusercontent.com/cnopt/gt7-assets/main/piece/2k/brand_logo_l_b/jaguar.png" width="75%"/>
                    <p className="car-manufacturer">{manufacturer}</p>
                    <p className="car-name">{car}</p>
                </div>
                <div className="hagerty-car-img">
                    <p className="hagerty-car-year">{year}</p>
                    <img src="https://raw.githubusercontent.com/cnopt/gt7-assets/main/car/0008/1067/thumbnail/73_00.png" width="100%"/>
                </div>
                <div className="hagerty-car-cost">
                    <p className="hagerty-car-credits">{credits}</p>
                    <p className="hagerty-car-miles">{miles}</p>
                </div>
            </div>
        </>
    )
}