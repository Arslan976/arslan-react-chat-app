import React from 'react';

import closeIcon from "../../Icons/closeIcon.png";
import onLineIcon from "../../Icons/onlineIcon.png";
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onLineIcon} alt="online" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href='/'><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
)
export default InfoBar;