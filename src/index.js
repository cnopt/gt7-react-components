import React from "react";
import ReactDOM from "react-dom/client";

import "../src/style.css";
import dragonTrailReverse                   from "./track-img/dragon.png";
import civic                                from "./car-img/ek.png";
import civicdark                            from "./car-img/ek-dark.png";
import InputField                           from "./comps/InputField.jsx";
import Dropdown                             from "./comps/Dropdown.jsx";
import Button                               from "./comps/Button.jsx";
import NoticeStrip                          from "./comps/NoticeStrip.jsx";
import GTTable                              from "./comps/GTTable.jsx";
import ContainerBox                         from "./comps/ContainerBox.jsx";
import ContainerBox_Upper                   from "./comps/ContainerBox_Upper.jsx";
import ContainerBox_Lower                   from "./comps/ContainerBox_Lower.jsx";
import ContainerBox_Lower_Inner             from "./comps/ContainerBox_Lower_Inner.jsx";
import ContainerBox_Upper_Inner             from "./comps/ContainerBox_Upper_Inner.jsx";
import ContainerBox_Upper_Inner_Scrollable  from "./comps/ContainerBox_Upper_Inner_Scrollable.jsx";
import DailyRace_InfoBar                    from "./comps/DailyRace_InfoBar.jsx";
import GTTrackMap                           from "./comps/GTTrackMap.jsx";
import TrackLayoutHorizontalContainer       from "./comps/TrackLayoutHorizontalContainer.jsx";
import TrackLayoutBox                       from "./comps/TrackLayoutBox.jsx";
import TrackConditionsBox                   from "./comps/TrackConditionsBox.jsx";
import Garage_CarInfoTable                  from "./comps/Garage_CarInfoTable.jsx";
import CarValuation                         from "./comps/CarValuation.jsx";
import CarValuationTableItem                from "./comps/CarValuationTableItem.jsx";
import CarValuationCard                     from "./comps/CarValuationCard.jsx";
import CarPerformanceCard                   from "./comps/CarPerformanceCard.jsx";
import CarPerformanceCard_Upper             from "./comps/CarPerformanceCard_Upper.jsx";
import CarPerformanceCard_Table             from "./comps/CarPerformanceCard_Table.jsx";
import TuningValuationComboBox              from "./comps/TuningValuationComboBox.jsx";
import TodaysValueBox                       from "./comps/TodaysValueBox.jsx";
import CarPurchaseBox                       from "./comps/CarPurchaseBox.jsx";
import TrackMenuLeaderboard                 from "./comps/TrackMenuLeaderboard.jsx";
import EventInfoBox                         from "./comps/EventInfoBox.jsx";
import SettingsBox                          from "./comps/SettingsBox.jsx";
import MusicRallySpeedometer                from "./comps/MusicRallySpeedometer.jsx";
import MainRaceSpeedometer                  from "./comps/MainRaceSpeedometer.jsx";
import Race_CarInfoBoxHorizontalGrid        from "./comps/Race_CarInfoBoxHorizontalGrid.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    {/* <InputField></InputField>
    <Button>Select from Garage</Button>
    <NoticeStrip color="blue">This race can be entered with a Garage Car</NoticeStrip>
    <GTTable width="100%"></GTTable> */}

    {/* <ContainerBox>
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

    {/* <TrackLayoutHorizontalContainer>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout A" miles="3.18"></TrackLayoutBox>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout B" miles="3.18"></TrackLayoutBox>
      <TrackLayoutBox img={dragonTrailReverse} title="Layout B" miles="3.18"></TrackLayoutBox>
    </TrackLayoutHorizontalContainer> */}
    
    {/* <TrackLayoutHorizontalContainer>
      <TrackConditionsBox title="Sunrise" time="08:25" conditions="Sunny"></TrackConditionsBox>
      <TrackConditionsBox title="Daytime" time="16:10" conditions="Cloudy"></TrackConditionsBox>
      <TrackConditionsBox title="Evening" time="18:00" conditions="Fine Weather"></TrackConditionsBox>
      <TrackConditionsBox title="Sunset"  time="20:20" conditions="Sunny"></TrackConditionsBox>
    </TrackLayoutHorizontalContainer> */}

    {/* <Garage_CarInfoTable 
      manufacturer="BMW" car="M3 '03" pp="591.63" displacement="3,327cc"
      drivetrain="FR" maxpower="401 BHP / 9,200 rpm" maxtorque="37.3 kgfm / 6,000 rpm"
      weight="1,209 kg" aspiration="NA (Naturally Aspirated)" miles="52,773"
      oil_status="Excellent" engine_status="Excellent" warning_status="Excellent">
    </Garage_CarInfoTable> */}

    {/* <CarValuation>
      <CarValuationTableItem manufacturer="Nissan" valuation="75,130" variation="8.8">GT-R Nismo '17</CarValuationTableItem>
      <CarValuationTableItem manufacturer="Nissan" valuation="14,380" variation="8.0">Silvia Q's (S13) '88</CarValuationTableItem>
      <CarValuationTableItem manufacturer="Toyota" valuation="4,600" variation="5.5">Aqua S '11</CarValuationTableItem>
    </CarValuation> */}

    {/* <CarValuationCard 
      manufacturer="Honda" car="Civic Type R (EK) '98" img={civic} pp="606.41" miles="17">
    </CarValuationCard> */}

    {/* <CarPerformanceCard>
      <CarPerformanceCard_Upper
        manufacturer="Honda" 
        car="Civic Type R (EK) '98" 
        img={civicdark} 
        pp="606.41"
        engine="K20C1-Civic-'20">
      </CarPerformanceCard_Upper>
      <CarPerformanceCard_Table
        displacement="2,095" 
        drivetrain="FF" 
        weight="968" 
        maxpower="508"
        maxtorque="54.0" 
        weight2power="1.87">
      </CarPerformanceCard_Table>
    </CarPerformanceCard> */}

    {/* <TuningValuationComboBox
      tuningValue="48,800"
      bodyValue="27,240"
      variation="0.3">
    </TuningValuationComboBox> */}

    {/* <TodaysValueBox
        tuningValue="48800"
        bodyValue="27240">
    </TodaysValueBox> */}

    {/* <CarPurchaseBox
      car="Lancer Evolution Final Gr.B Road Car"
      color="YXA Green"
      credits="300,000">
    </CarPurchaseBox> */}

    {/* <TrackMenuLeaderboard>
    </TrackMenuLeaderboard> */}

    {/* <EventInfoBox></EventInfoBox> */}
    
     {/* <SettingsBox setting="Ghost Settings" scrollable></SettingsBox> */}

    {/* <Race_MusicRallySpeedometer gear="3" speed="128"></Race_MusicRallySpeedometer> */}

    {/* <Race_MainSpeedometer
      speed="142"
      gear="6"
      rpm="71"
      throttle="96"
      brake="0">
    </Race_MainSpeedometer> */}

    <Race_CarInfoBoxHorizontalGrid
      img="https://raw.githubusercontent.com/cnopt/gt7-assets/main/car/0007/1902/thumbnail/73_00.png"
      car="Z1 GTR '11"
      manufacturer="BMW"
      display_variant_b>
    </Race_CarInfoBoxHorizontalGrid>

  </>
);
