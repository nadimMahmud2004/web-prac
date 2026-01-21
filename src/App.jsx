import React, { useState } from "react";
import Header from "./components/Header";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello how can I help you ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 ">
        <div className="max-w-5xl space-y-4">
          <ChatMessage darkMode={darkMode} messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default App;
