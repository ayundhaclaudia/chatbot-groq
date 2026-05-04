import type { Message } from "../types/Message";
import chatbotConfig from "../config/chatbotConfig";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  const displayMessages =
    messages.length === 0
      ? [{ role: "model" as const, content: chatbotConfig.welcomeMessage }]
      : messages;

  return (
    <div className="chat-window">
      <div className="messages">
        {displayMessages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message model">
            <div className="message-content loading">Mengetik...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatWindow;
 
