import ChatMessage, { CustomChatMessage } from "./ChatMessage";
import { generateRandomMessage } from "../utils/helpers";
import { addMessage, clearMessages } from "../redux/slices/LiveChatSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const LiveChat = () => {
  let ChatMsgs = useSelector((store) => store.liveChat.messages);
  const dispatch = useDispatch();

  // API polling
  useEffect(() => {
    const timer = setInterval(() => {
      let ChatObj = generateRandomMessage();
      console.log("API call");
      dispatch(
        addMessage({
          name: ChatObj.username,
          message: ChatObj.message,
        }),
      );
    }, 1500);

    return () => {
      console.log("Cleanup running, clearing timer");
      clearInterval(timer);
      dispatch(clearMessages());
    };
  }, [dispatch]);

  return (
    <div className="w-full md:w-1/3">
      <div className="border-1 mb-2 flex h-[420px] flex-col-reverse gap-2 overflow-y-scroll rounded-sm border">
        {ChatMsgs.length > 0 ? (
          ChatMsgs.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <CustomChatMessage />
    </div>
  );
};

export default LiveChat;
