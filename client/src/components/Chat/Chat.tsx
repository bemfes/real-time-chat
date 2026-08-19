import { FC, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const ENDPOINT = "http://localhost:3000";

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(ENDPOINT);
    console.log(socket);

    socket.current.emit("join", { name, room }, () => {});

    return () => {
      socket.current!.emit("disconnect");

      socket.current!.off();
    };
  }, [ENDPOINT, name, room]);

  return (
    <div>
      chat with user {name} in room {room}
    </div>
  );
};

export default Chat;
