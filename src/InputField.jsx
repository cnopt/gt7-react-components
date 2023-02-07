import React from "react";
import ReactDOM from "react-dom/client";
import "./css/InputField.css";
import Dropdown from "./Dropdown.jsx";
// rename this to 'multi-select box or area or something
// its not really an input anymore
export default function InputField(props) {
  const {country, manufacturer, model} = props;
  return (
    <>
      <div id="inputfield-container-outer">
        <p id="container-title">Car</p>
        <div id="inputfield-container-inner">
          <div id="container-country">
            <Dropdown label="Country/Region"></Dropdown>
          </div>
          <div id="container-maker">
            <Dropdown label="Maker"></Dropdown>
          </div>
          <div id="container-car">
            <Dropdown label="Car"></Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
