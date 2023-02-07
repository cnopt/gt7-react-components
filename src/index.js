import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import InputField from "./InputField.jsx";
import Dropdown from "./Dropdown.jsx";
import Button from "./Button.jsx";
import NoticeStrip from "./NoticeStrip.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <InputField></InputField>
    <Button>Select from Garage</Button>
    <NoticeStrip color="blue">
      This race can be entered with a Garage Car
    </NoticeStrip>
  </>
);
