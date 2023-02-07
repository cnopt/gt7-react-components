import React from "react";
import ReactDOM from "react-dom/client";
import "./css/InputField.css";

export default function InputField(props) {
  const {country, manufacturer, model} = props;
  return (
    <>
      <div id="inputfield-container-outer">
        <p id="container-title">Car</p>
        <div id="inputfield-container-inner">
          <div id="container-country">
            <p class="label">Country/Region</p>
            <select name="country" id="selector-country">
              <option value="---">---</option>
              <option value="Denmark">Denmark</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Sweden">Sweden</option>
            </select>
          </div>
          <div id="container-maker">
            <p class="label">Maker</p>
            <select name="maker" id="selector-maker">
              <option value="---">---</option>
              <option value="Cheverolet">Germany</option>
              <option value="Dodge">France</option>
              <option value="Jaguar">United Kingdom</option>
            </select>
          </div>
          <div id="container-car">
            <p class="label">Car</p>
            <select name="car" id="selector-car">
              <option value="---">---</option>
              <option value="Denmark">Denmark</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Sweden">Sweden</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
