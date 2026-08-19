import React, { FC } from "react";
import "./Input.css";

interface InputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
}

const Input: FC<InputProps> = ({ message, setMessage, sendMessage }) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input"
        placeholder="Type a message..."
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="sendButton">
        Send
      </button>
    </form>
  );
};

export default Input;
