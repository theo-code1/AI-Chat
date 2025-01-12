import { useRef } from "react";
import TopArrow from "../assets/TopArrow";

export default function ChatForm({
  setChatHistory,
  chatHistory,
  generateBotResponse,
}) {
  const inputRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    console.log(userMessage);
    inputRef.current.value = "";

    // Update the chat history with the user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Fetch the bot response
    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking..." },
        ]),
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]),
      600
    );
  };

  return (
    <form
      onSubmit={handleSendMessage}
      action="#"
      className="absolute backdrop-blur-lg  z-10 bottom-[1.5rem] left-[5%] mx-auto w-[90%] flex items-center justify-between h-[50px]"
    >
      <input
        ref={inputRef}
        onChange={(e) => e.target.value}
        type="text"
        placeholder="Message..."
        className="peer w-full focus:outline-darkenColor outline-grayColor outline-2 outline h-[50px] px-[1rem] rounded-full bg-transparent"
        required
      />
      <button
        type="submit"
        className="h-full w-[50px] transition-all duration-200 absolute right-0 bg-darkenColor hover:bg-darkenColor/90 flex justify-center items-center peer-placeholder-shown:hidden text-primaryColor text-[1.4rem] rounded-full"
      >
        <TopArrow />
      </button>
    </form>
  );
}
