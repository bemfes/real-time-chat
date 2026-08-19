import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

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

  useEffect(() => {
    socket.current!.on("message", (message) => {
      setMessages((prev) => [...prev, message.text]);
    });
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      socket.current!.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message);
  console.log(messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room!} />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
        />
      </div>
    </div>
  );
};

export default Chat;
