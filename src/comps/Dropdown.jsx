import React from "react";
import ReactDOM from "react-dom/client";
import "../css/InputField.css";

export default function Dropdown(props) {
  const {label} = props;
  return (
    <>
      <p className="label">{label}</p>
      <select name="country" id="selector-country">
        <option value="---">---</option>
        <option value="Denmark">Denmark</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Sweden">Sweden</option>
      </select>
    </>
  );
}
