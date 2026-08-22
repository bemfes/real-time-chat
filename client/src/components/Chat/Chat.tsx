import { FC, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import type { IMessage } from "@chat/common/types/types";
import Messages from "../Messages/Messages";
import type { IUser } from "@chat/common/types/types";
import UsersOnline from "../UsersOnline/UsersOnline";

const Chat: FC = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const room = searchParams.get("room");

  const navigate = useNavigate();

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const ENDPOINT = "http://localhost:3000";

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(ENDPOINT);

    socket.current.emit("join", { name, room }, (error: string) => {
      if (error) {
        alert(error);
        navigate("/");
      }
    });

    socket.current!.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.current!.on("roomData", (message) => {
      setUsers(message.users);
    });

    return () => {
      socket.current!.disconnect();

      socket.current!.off();
    };
  }, [ENDPOINT, name, room]);

  const sendMessage = () => {
    if (message) {
      socket.current!.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room!} />
        <Messages messages={messages} name={name!} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <UsersOnline users={users} />
    </div>
  );
};

export default Chat;
