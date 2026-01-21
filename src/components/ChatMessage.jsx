import { BotIcon, User } from "lucide-react";
import React from "react";

const ChatMessage = ({ darkMode, messages }) => {
  return (
    <div
      className={`flex w-full px-6 py-3 ${messages.sender === "user" ? "justify-end" : "justify-start"} `}
    >
      <div
        className={`flex max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3.5 ${messages.sender === "user" ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md " : darkMode ? "bg-gray-600 text-gray-100 border border-gray-700" : "bg-white text-gray-800 shadow-md "} `}
      >
        <div
          className={`shrink-0 mr-3 ${messages.sender === "user" ? "text-indigo-200" : darkMode ? "text-indigo-400" : "text-indigo-700"} `}
        >
          {messages.sender === "user" ? (
            <User className="h-7 w-7 p-1" />
          ) : (
            <BotIcon className="h-7 w-7 p-1" />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-1 flex justify-between items-center">
            <span className="font-medium">
              {messages.sender ? "You" : "Bot"}
            </span>
            <span
              className={`text-xs ${messages.sender === "user" ? "opacity-70" : darkMode ? "text-gray-400" : "text-gray-500"}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
