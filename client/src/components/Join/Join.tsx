import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Join: FC = () => {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            value={name}
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            value={room}
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link to={""}>
          <button className="button mt-20" type="submit"></button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
