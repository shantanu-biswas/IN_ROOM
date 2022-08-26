import React from "react";
import "./styles.css"

import Button from "@mui/material/Button";

function Devices() {
    return (
        <div className="flexMinWidthCol  pdngSM">
            <div className="flexCol halfHeight inShadow brdrRadiusSM pdngSM Scroll">
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
                <div className="flexRow pdngXS brdrRadiusSM brdrBlackSM mrgnTSM ">
                    <div className="flexAutoCol imgCntnr">
                        <img src="/devices/device.png" alt="device" />
                    </div>
                    <div className="flexAutoCol pdngLSM justifyCntr alignCntr">
                        <h3><b>Web Cam</b></h3>
                    </div>
                    <div className="flexMinWidthCol justifyCntr alignEnd">
                    <Button variant="contained" size="small" disableElevation>ADD</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Devices;