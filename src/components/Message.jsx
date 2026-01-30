import gemini from "../assets/gemini-chatbot-logo.svg";
const Message = ({ message }) => {
  return (
    <div
      id={message.id}
      className={`message ${message.role}-message ${message.loading ? "loading" : ""} ${message.error ? "error" : ""}`}
    >
      {message.role === "bot" && <img src={gemini} alt="bot avatar" />}
      <p className="text">{message.content}</p>
    </div>
  );
};

export default Message;
