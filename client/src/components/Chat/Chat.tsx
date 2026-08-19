import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const ENDPOINT = "http://localhost:3000";

  useEffect(() => {
    const socket = io(ENDPOINT);
    console.log(socket);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, name, room]);

  return (
    <div>
      chat with user {name} in room {room}
    </div>
  );
};

export default Chat;
