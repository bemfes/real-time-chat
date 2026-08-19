import React, { FC } from "react";

interface InputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}

const Input: FC<InputProps> = ({ message, setMessage, sendMessage }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <form className="form">
      <input
        className="input"
        placeholder="Type a message..."
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button className="sendButton" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default Input;
