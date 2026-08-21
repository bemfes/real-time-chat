import { FC } from "react";
import onlineIcon from "../../assets/onlineIcon.png";
import type { IUser } from "../../../../common/types/types";
import "./UsersOnline.css";

interface UsersOnlineProps {
  users: IUser[];
}

const UsersOnline: FC<UsersOnlineProps> = ({ users }) => {
  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            {users.map((user) => (
              <div key={user.id} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} />
                {user.name}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UsersOnline;
