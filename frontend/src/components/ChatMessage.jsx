import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/slices/LiveChatSlice.js";
export const CustomChatMessage = () => {
  const [myMessage, setMyMessage] = useState();

  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Me", message: myMessage }));
    setMyMessage("");
  };
  return (
    <form
      onSubmit={(e) => handleSendMessage(e)}
      className="gap border-1 flex h-fit items-center justify-between rounded-md border"
    >
      <input
        type="text"
        placeholder="say something......"
        className="p-2 outline-none text-black"
        value={myMessage}
        onChange={(e) => setMyMessage(e.target.value)}
      />
      <button className="cursor-pointer rounded-sm bg-purple-500 p-2 text-white">
        Send
      </button>
    </form>
  );
};

const ChatMessage = ({ name, message }) => {
  return (
    <div className="my-1 flex w-full items-center gap-2 px-2 shadow-sm">
      <FaUserCircle className="cursor-pointer text-2xl" />
      <span className="text-sm font-bold">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
