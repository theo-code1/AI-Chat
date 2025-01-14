// import axios from "axios";
// const axios = await import("axios");
import { useEffect, useRef, useState } from "react";
import Robot from "../assets/Robot";
import BottomArrows from "../assets/BottomArrow";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";

const ChatBot = ({ handleShowChat }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef(null);

  const generateBotResponse = async (history) => {
    // update History
    const updateHistory = (text = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    //fomating the history to send to the server
    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
      // 'Authorization/json':  `bearer ${import.meta.env.VITE_API_URL}`,
    };
    try {
      //make the API call to get the bot/s response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      console.log(response.data);

      const data = await response.json();
      console.log("API response:", data);
      if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
        throw new Error(data.error.message);
      }
      console.log(data);

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*\{.*?}\*\*/g, "")
        .trim();

      updateHistory(apiResponseText);
      // const apiResponseText = data.candide
    } catch (error) {
      setChatHistory((prev) => {
        [...prev, { role: "model", Error: "Something went wrong !" }];
      });

      console.error("Error fetching bot response:", error);
      return [{ role: "model", text: "Sorry, I can't assist with that." }];
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="z-50 w-[500px] h-[85vh] absolute bottom-[100px] right-[35px] bg-primaryColor rounded-2xl shadow-lg overflow-hidden scrollbar-thin scrollbar-thumb-gray">
      <div className="header relative flex items-center justify-between w-full px-[1rem] bg-secondaryColor h-[80px] rounded-tr-lg rounded-tl-lg text-primaryColor">
        <div className="chatHeader flex items-center ">
          <Robot className="mr-[1rem] size-[40px]" />
          <h1 className="text-2xl font-semibold">AI Chat</h1>
        </div>
        <BottomArrows
          onClick={handleShowChat}
          className="absolute right-[1.5rem] hover:bg-darkenColor transition-all duration-200 rounded-full p-3 text-[1.7rem]"
        />
      </div>
      <div
        ref={chatBodyRef}
        className="chat-messages h-[75%] pt-[1rem] px-[.8rem] flex flex-col gap-[1rem] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray"
      >
        <div className="bot-message max-w-[80%] flex items-center relative w-fit gap-[.7rem] ">
          <Robot className="text-primaryColor rounded-full p-[.3rem] flex items-center justify-center size-[40px] bg-[#6b6dc7] self-end" />
          <p className="text-[1.05rem] bg-grayColor text-darkMode px-[1rem] py-[.45rem] rounded-md rounded-bl-none">
            Hello there ! <br /> How can i assist you today ?
          </p>
        </div>
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat} />
        ))}

        <ChatForm
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
          chatHistory={chatHistory}
        />
      </div>
    </div>
  );
};

export default ChatBot;
