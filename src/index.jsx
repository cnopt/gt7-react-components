import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import InputField from "./InputField.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <InputField country="Germany" manufacturer="BMW" model="M3 03"></InputField>
);
