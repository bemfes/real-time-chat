import { FC } from "react";
import onlineIcon from "../../assets/onlineIcon.png";
import closeIcon from "../../assets/closeIcon.png";
import { Link } from "react-router-dom";
import "./InfoBar.css";

interface InfoBarProps {
  room: string;
}

const InfoBar: FC<InfoBarProps> = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="online image" />
        <p>{room}</p>
      </div>
      <div className="rightInnerContainer">
        <Link to={"/"}>
          <img src={closeIcon} alt="close image" />
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
