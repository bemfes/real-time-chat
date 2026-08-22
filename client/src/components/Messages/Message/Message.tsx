import { FC } from "react";
import "./Message.css";
import type { IMessage } from "@chat/common/types/types";

interface MessageProps {
  message: IMessage;
  name: string;
}

const Message: FC<MessageProps> = ({ message, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="sentText">{message.user}</p>
        <p className="messageText colorDark">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
