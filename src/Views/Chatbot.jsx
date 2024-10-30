import { useState, useRef, useEffect } from "react";
import Navbar from "../Component/Navbar";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const chatContainerRef = useRef(null);
  const lastUserMessageIndexRef = useRef(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    S;
  };

  const handleSendQuery = async () => {
    if (!query.trim()) return;

    const options = {
      method: "POST",
      url: "https://copilot5.p.rapidapi.com/copilot",
      headers: {
        "x-rapidapi-key": "96dfa92815mshd651d70c242f75bp1d4073jsn3437b8949e42",
        "x-rapidapi-host": "copilot5.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        message: query,
        conversation_id: null,
        tone: "BALANCED",
        markdown: false,
        photo_url: null,
      },
    };

    setChatHistory((prev) => [
      ...prev,
      { query, response: "", timestamp: new Date().toISOString() },
    ]);

    const currentIndex = chatHistory.length;
    lastUserMessageIndexRef.current = currentIndex;
    setLoadingIndex(currentIndex);

    try {
      const response = await axios.request(options);
      const { message } = response.data.data;

      setChatHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = {
          query: newHistory[currentIndex].query,
          response: message,
          timestamp: new Date().toISOString(),
        };
        return newHistory;
      });

      setQuery("");
    } catch (error) {
      console.error("Error fetching data:", error);

      const errorMessage = error ? error.message : "An error occurred";

      setChatHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = {
          query: newHistory[currentIndex].query,
          response: errorMessage,
          timestamp: new Date().toISOString(),
        };
        return newHistory;
      });
    } finally {
      setLoadingIndex(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendQuery();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current && lastUserMessageIndexRef.current !== null) {
      const lastUserMessageIndex = lastUserMessageIndexRef.current;
      const lastUserMessageElement =
        chatContainerRef.current.children[lastUserMessageIndex];

      if (lastUserMessageElement) {
        lastUserMessageElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [chatHistory]);

  return (
    <div className="flex flex-col h-full 2xl:h-screen bg-[#0F172A] py-4">
      <Navbar />

      <main className="flex-grow flex">
        <div className="w-full max-w-2xl mx-auto p-4 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-4 h-[500px] md:h-[850px] lg:h-[550px] important">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Chat History
            </h2>
            <div
              ref={chatContainerRef}
              className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 h-[500px] md:h-[850px] lg:h-[550px] overflow-y-auto rounded-lg shadow-md"
            >
              {chatHistory.map((chat, index) => (
                <div key={index} className="space-y-2">
                  {chat.query && (
                    <div className="flex justify-end">
                      <div className="max-w-xs p-3 rounded-2xl shadow-md bg-blue-500 text-white rounded-br-none">
                        <p className="text-sm">{chat.query}</p>
                        <p className="text-xs mt-2 text-gray-300 text-right">
                          {new Date(chat.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {loadingIndex === index ? (
                    <div className="flex justify-start">
                      <div className="max-w-xs p-3 rounded-2xl shadow-md bg-gray-200 dark:bg-gray-700 dark:text-white rounded-bl-none">
                        <p className="text-sm">Loading...</p>
                      </div>
                    </div>
                  ) : (
                    chat.response && (
                      <div className="flex justify-start">
                        <div
                          className={`max-w-xs p-3 rounded-2xl shadow-md ${
                            chat.query
                              ? "bg-gray-200 dark:bg-gray-700 dark:text-white"
                              : "bg-red-200 dark:bg-red-700"
                          } rounded-bl-none`}
                        >
                          <div className="text-sm">{chat.response}</div>
                          <p className="text-xs mt-2 text-gray-400 text-right">
                            {new Date(chat.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
            <textarea
              className="flex-1 h-12 max-h-32 resize-none overflow-y-auto px-4 py-3 text-gray-700 dark:text-white bg-transparent focus:outline-none"
              placeholder="Type a message..."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              onClick={handleSendQuery}
              className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
