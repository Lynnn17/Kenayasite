import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSendQuery = async () => {
    const options = {
      method: "POST",
      url: "https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask",
      headers: {
        "x-rapidapi-key": "96dfa92815mshd651d70c242f75bp1d4073jsn3437b8949e42",
        "x-rapidapi-host": "chatgpt-gpt4-ai-chatbot.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        query: query,
      },
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
      setChatHistory((prev) => [
        ...prev,
        { query, response: response.data.response },
      ]);
      setQuery(""); // Clear input after sending
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>ChatGPT Chat</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Type your question..."
        />
        <button onClick={handleSendQuery}>Send</button>
      </div>
      <div>
        <h2>Chat History</h2>
        {chatHistory.map((chat, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>Query:</strong> {chat.query}
            </p>
            <p>
              <strong>Response:</strong> {chat.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
