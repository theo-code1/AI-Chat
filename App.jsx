import { useState } from "react";
import ChatBot from "./Components/ChatBot";
import Messageicon from "./assets/Messageicon";
import XIcon from "./assets/XIcon";

export default function App() {
  const [isChatDisplay, setIsChatDisplay] = useState(true);

  const handleShowChat = () => {
    setIsChatDisplay((prevState) => !prevState);
  };
  return (
    <section className="*:m-0 *:p-0 *:box-border h-screen w-screen flex bg-gradient-to-t from-gradientColor2 to-gradientColor1 relative">
      {isChatDisplay && <ChatBot handleShowChat={handleShowChat} />}
      <button
        onClick={handleShowChat}
        className={`absolute bottom-[30px] right-[40px] w-[60px] h-[60px] rounded-full flex justify-center items-center bg-secondaryColor hover:brightness-[.7] transition-all duration-200`}
      >
        {isChatDisplay ? (
          // <span className="text-white text-[1.2rem] text-center">X</span>
          <XIcon />
        ) : (
          <Messageicon className="transition-all duration-200" />
        )}
      </button>
      <p className="absolute left-1/2 -translate-x-1/2 bottom-[10px]">
        Powered By Theo Code !
      </p>
    </section>
  );
}
