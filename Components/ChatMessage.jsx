import Robot from "../assets/Robot";
import UserIcon from "../assets/UserIcon";

export default function ChatMessage({ chat }) {
  return (
    <div
      className={`${
        chat.role === "user"
          ? "user-message max-w-[90%] w-fit ml-auto flex items-center gap-[.7rem] relative"
          : " message max-w-[80%] flex items-center relative w-fit gap-[0]"
      } `}
    >
      {chat.role === "user" ? (
        <UserIcon className="user-message self-end border-2 border-darkenColor text-darkenColor p-[.5rem] text-[2.6rem] rounded-full max-w-[80%]  w-fit ml-auto flex items-center gap-[1rem] order-2" />
      ) : (
        <Robot
          className={`bot-message mr-[.7rem] absolute left-0 bottom-0 self-end text-primaryColor rounded-full p-[.3rem] flex items-center justify-center w-10 h-10 bg-[#6b6dc7]
          }`}
        />
      )}
      <p
        className={`${
          chat.role === "user"
            ? "bg-darkenColor/90 flex-grow font-[400] text-primaryColor rounded-lg px-[1rem] py-[.45rem] rounded-br-none order-1"
            : "text-[1.05rem] ml-[50px] flex-grow font-[400] max-w-[calc(100% - 51.2px)] bg-grayColor text-darkMode px-[1rem] py-[.45rem] rounded-lg rounded-bl-none"
        } ${chat.text === "Something went wrong !" ? "text-red-600" : ""}`}
      >
        {chat.text}
      </p>
    </div>
  );
}
