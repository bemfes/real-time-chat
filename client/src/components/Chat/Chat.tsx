import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const [message, setMessage] = useState<string>("");

  const ENDPOINT = "http://localhost:3000";

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(ENDPOINT);
    console.log(socket);

    socket.current.emit("join", { name, room }, () => {});

    return () => {
      socket.current!.disconnect();

      socket.current!.off();
    };
  }, [ENDPOINT, name, room]);

  const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (message) {
      socket.current!.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
    </div>
  );
};

export default Chat;
