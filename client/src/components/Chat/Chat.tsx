import { FC } from "react";
import { useSearchParams } from "react-router-dom";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");
  return (
    <div>
      chat with user {name} in room {room}
    </div>
  );
};

export default Chat;
