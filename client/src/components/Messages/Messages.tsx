import { FC } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "./Message/Message";
import type { IMessage } from "../../types/types";

interface MessagesProps {
  messages: IMessage[];
  name: string;
}

const Messages: FC<MessagesProps> = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
