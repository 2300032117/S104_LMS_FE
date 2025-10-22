import React, { useState } from "react";

const Bot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const botAvatar = "BotAvatar.jpg"; 

  const toggleChat = () => {
    setOpen(!open);
    if (!open && messages.length === 0) {
      setMessages([{ from: "bot", text: "Hi! How can I help you with the library today?" }]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotReply(input.toLowerCase()) };
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const getBotReply = (msg) => {
    if (msg.includes("search")) {
      return "You can search for books by title or author using the search bar.";
    } else if (msg.includes("borrow")) {
      return "Click 'Borrow' on a book you want. You must be logged in.";
    } else if (msg.includes("return")) {
      return "Return books via your account dashboard under 'My Loans'.";
    } else if (msg.includes("fine")) {
      return "Late return fines are $0.50 per day.";
    } else if (msg.includes("login")) {
      return "Click the 'Login' button at the top.";
    } else {
      return "Sorry, I didn't understand that. Try asking about borrowing, returning, or searching.";
    }
  };

  return (
    <div>
      {!open && (
        <button className="chat-toggle" onClick={toggleChat}>
          💬
        </button>
      )}

      {open && (
        <div className="chat-widget open">
          <div className="chat-header" onClick={toggleChat}>
            📚 Library Chatbot ✖
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.from}`}>
                {msg.from === "bot" && (
                  <img src={botAvatar} alt="Bot" className="avatar" />
                )}
                <div className={`message ${msg.from}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
