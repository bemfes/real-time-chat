import { FC } from "react";
import { Link } from "react-router-dom";

const Join: FC = () => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input type="text" placeholder="Name" className="joinInput" />
        </div>
        <div>
          <input type="text" placeholder="Room" className="joinInput mt-20" />
        </div>
        <Link to={""}>
          <button className="button mt-20" type="submit"></button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
