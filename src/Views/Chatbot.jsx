import { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
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
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        ChatGPT Chat
      </h1>

      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your question..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSendQuery}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Chat History
        </h2>

        <div className="space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm font-semibold text-gray-600">
                <strong>Query:</strong> {chat.query}
              </p>
              <p className="text-sm text-gray-800 mt-1">
                <strong>Response:</strong> {chat.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
