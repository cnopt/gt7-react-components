import React from "react";
import {TbMountain} from "react-icons/tb";
import {MdPanoramaPhotosphere} from "react-icons/md";
import '../css/CarViewButtons.css';

export default function CarViewButtons(props) {
    return(
        <>
            <div id="carview-buttons">
                <div id="carview-landscape">
                    <TbMountain />
                </div>
                <div id="carview-studio">
                    <MdPanoramaPhotosphere />
                </div>
            </div>
        </>
    )
}