import React, { useState } from "react";
import "./styles.css"
// COMPONENTS
import Borders from "./Components/borders";
import Elements from "./Components/elements";
import Devices from "./Components/devides";




function Controller() {

    const [openBorders, SetOpenBorders] = useState(true)
    const [openElements, SetOpenElements] = useState(false)
    const [openDevices, SetOpenDevices] = useState(false)


    const handleBorders = () => {
        SetOpenBorders(true)
        SetOpenElements(false)
        SetOpenDevices(false)
    }

    const handleElements = () => {
        SetOpenBorders(false)
        SetOpenElements(true)
        SetOpenDevices(false)
    }

    const handleDevices = () => {
        SetOpenBorders(false)
        SetOpenElements(false)
        SetOpenDevices(true)
    }

    return (
        <div className="flexCol brdrRadiusSM whiteBg fullHeight  ">
            <div className="flexRow pdngXS">
                <div className="flexMinWidthCol pdngXS">
                    <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM pointer" onClick={handleBorders}>
                        <div className="flexAutoCol imgCntnr">
                            <img src="/border/border.png" alt="border" />
                        </div>
                        <div className="flexMinWidthCol justifyCntr alignCntr">
                            <h3><b>Borders</b></h3>
                        </div>
                    </div>
                </div>
                <div className="flexMinWidthCol pdngXS">
                    <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM pointer" onClick={handleElements}>
                        <div className="flexAutoCol imgCntnr">
                            <img src="/element/element.png" alt="element" />
                        </div>
                        <div className="flexMinWidthCol justifyCntr alignCntr">
                            <h3><b>Elements</b></h3>
                        </div>
                    </div>
                </div>
                <div className="flexMinWidthCol pdngXS">
                    <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM pointer" onClick={handleDevices}>
                        <div className="flexAutoCol imgCntnr">
                            <img src="/devices/device.png" alt="device" />
                        </div>
                        <div className="flexMinWidthCol justifyCntr alignCntr">
                            <h3><b>Devices</b></h3>
                        </div>
                    </div>
                </div>
            </div>

            {openBorders ?
                <Borders />
                :
                ""
            }
            {openElements ?
                <Elements />
                :
                ""
            }
            {openDevices ?
                <Devices />
                :
                ""
            }


        </div>
    )
}

export default Controller;