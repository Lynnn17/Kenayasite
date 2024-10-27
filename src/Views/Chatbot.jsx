import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add the user message to the messages array
    setMessages([...messages, { role: "user", text: input }]);

    try {
      // Send the user message to the ChatGPT API
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: `User: ${input}\nChatGPT:`,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );

      // Extract the bot response from the API response
      const botResponse = response.data.choices[0].text;

      // Add the bot response to the messages array
      setMessages([...messages, { role: "bot", text: botResponse }]);

      // Clear the input field
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message.role === "bot" ? (
                <div className="bot-message">{message.text}</div>
              ) : (
                <div className="user-message">{message.text}</div>
              )}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
