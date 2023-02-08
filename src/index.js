import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import InputField from "./InputField.jsx";
import Dropdown from "./Dropdown.jsx";
import Button from "./Button.jsx";
import NoticeStrip from "./NoticeStrip.jsx";
import GTTable from "./GTTable.jsx";
import ContainerBox from "./ContainerBox.jsx";
import ContainerBox_Upper from "./ContainerBox_Upper.jsx";
import ContainerBox_Lower from "./ContainerBox_Lower.jsx";
import DailyRace_InfoBar from "./DailyRace_InfoBar.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    {/* <InputField></InputField> */}
    {/* <Button>Select from Garage</Button> */}
    {/* <NoticeStrip color="blue">This race can be entered with a Garage Car</NoticeStrip> */}
    {/* <GTTable></GTTable> */}
    <ContainerBox>
      <ContainerBox_Upper>
        <DailyRace_InfoBar></DailyRace_InfoBar>
        <GTTable></GTTable>
      </ContainerBox_Upper>



      <ContainerBox_Lower>

      </ContainerBox_Lower>
    </ContainerBox>
  </>
);
