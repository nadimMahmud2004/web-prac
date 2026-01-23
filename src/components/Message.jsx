import gemini from "../images/gemini-chatbot-logo (1).svg";

const Message = ({ message }) => {
  return (
    <div
      id={message.id}
      className={`message ${message.role}-message ${message.loading ? "loading" : ""} ${message.error ? "error" : ""}`}
    >
      {message.role === "bot" && (
        <img className="avatar" src={gemini} alt="Bot Avatar" />
      )}
      <p className="text">{message.content}</p>
    </div>
  );
};
export default Message;
