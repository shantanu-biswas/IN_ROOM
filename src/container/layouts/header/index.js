import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

function Header() {
    return (
        <div className="flexRow header alignCntr pdngXS">
            <div className='flexAutoRow logoImgCntnr pdngHSM alignCntr'>
                <Link to="" className="headerBrandindLink">
                    <img src='/FaviconInRoom.png' alt='inapi logo' />
                </Link>
            </div>
            <div className="flexMinWidthRow justifyEnd pdngHSM " >
                <div className="flexMinWidthCol alignEnd">
                    <div className="flexInline pointer" >
                        <div className="flexInline alignCntr userName">
                            <span className="userNameTxt ellipsisTxt">Shantanu</span>
                        </div>
                        <div className="flexInline justifyCntr alignCntr AvatarCircleMD">
                          <img id="preview" src='user/user.svg' alt="profileImage" className="myProfileImage" /> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;