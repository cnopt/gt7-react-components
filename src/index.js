import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style.css";

import dragonTrailReverse from "./track-img/dragon.png";
import InputField from "./InputField.jsx";
import Dropdown from "./Dropdown.jsx";
import Button from "./Button.jsx";
import NoticeStrip from "./NoticeStrip.jsx";
import GTTable from "./GTTable.jsx";
import ContainerBox from "./ContainerBox.jsx";
import ContainerBox_Upper from "./ContainerBox_Upper.jsx";
import ContainerBox_Lower from "./ContainerBox_Lower.jsx";
import ContainerBox_Lower_Inner from "./ContainerBox_Lower_Inner.jsx";
import ContainerBox_Upper_Inner from "./ContainerBox_Upper_Inner.jsx";
import ContainerBox_Upper_Inner_Scrollable from "./ContainerBox_Upper_Inner_Scrollable.jsx";
import DailyRace_InfoBar from "./DailyRace_InfoBar.jsx";
import GTTrackMap from "./GTTrackMap.jsx";
import TrackLayoutHorizontalContainer from "./TrackLayoutHorizontalContainer.jsx";
import TrackLayoutBox from "./TrackLayoutBox.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    {/* <InputField></InputField>
    <Button>Select from Garage</Button>
    <NoticeStrip color="blue">This race can be entered with a Garage Car</NoticeStrip>
    <GTTable width="100%"></GTTable>
    <ContainerBox>
      <ContainerBox_Upper>
        <DailyRace_InfoBar></DailyRace_InfoBar>
        <ContainerBox_Upper_Inner>
          <ContainerBox_Upper_Inner_Scrollable>
            <GTTable header="Regulations" width="100%"></GTTable>
            <GTTable header="Car Restrictions" width="100%"></GTTable>
          </ContainerBox_Upper_Inner_Scrollable>
          <GTTrackMap img={dragonTrailReverse}></GTTrackMap>
        </ContainerBox_Upper_Inner>
      </ContainerBox_Upper>
      <ContainerBox_Lower>
        <NoticeStrip color="blue">This race can be entered with a Garage Car</NoticeStrip>
        <ContainerBox_Lower_Inner>
          <Button>Select from Garage</Button>
          <Button>Rent an Event-Specified Car</Button>
        </ContainerBox_Lower_Inner>
      </ContainerBox_Lower>
    </ContainerBox> */}

    <TrackLayoutHorizontalContainer>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout A" miles="3.18"></TrackLayoutBox>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout B" miles="3.18"></TrackLayoutBox>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout C" miles="2.78"></TrackLayoutBox>
    </TrackLayoutHorizontalContainer>
    

  </>
);
