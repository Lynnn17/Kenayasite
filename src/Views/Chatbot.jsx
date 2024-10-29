import { useState, useRef, useEffect } from "react";
import Navbar from "../Component/Navbar";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Chatbot = () => {
  const [query, setQuery] = useState(""); // State untuk input pengguna
  const [chatHistory, setChatHistory] = useState([]); // State untuk menyimpan riwayat chat
  const [loadingIndex, setLoadingIndex] = useState(null); // State untuk menampilkan loading index
  const chatContainerRef = useRef(null); // Ref untuk container chat
  const lastUserMessageIndexRef = useRef(null); // Ref untuk menyimpan index pesan pengguna terakhir

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSendQuery = async () => {
    if (!query.trim()) return; // Cegah input kosong

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

    // Tambahkan pesan pengguna ke chatHistory sebelum request API
    setChatHistory((prev) => [
      ...prev,
      { query, response: "", timestamp: new Date().toISOString() },
    ]);

    const currentIndex = chatHistory.length; // Get the index of the current message
    lastUserMessageIndexRef.current = currentIndex; // Set last user message index
    setLoadingIndex(currentIndex); // Set loading index

    try {
      const response = await axios.request(options);
      const { message } = response.data.data;

      // Tambahkan respons bot ke chatHistory
      setChatHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = {
          query: newHistory[currentIndex].query,
          response: message,
          timestamp: new Date().toISOString(),
        };
        return newHistory;
      });

      setQuery(""); // Bersihkan input setelah mengirim
    } catch (error) {
      console.error("Error fetching data:", error);

      // Capture error message to display in chat history
      const errorMessage = error ? error.message : "An error occurred";

      // Tambahkan error ke chatHistory
      setChatHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex] = {
          query: newHistory[currentIndex].query,
          response: errorMessage, // Display error message
          timestamp: new Date().toISOString(),
        };
        return newHistory;
      });
    } finally {
      // Reset loading index
      setLoadingIndex(null);
    }
  };

  // Fungsi untuk menghandle event Enter pada textarea
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Mencegah newline saat menekan Enter
      handleSendQuery(); // Panggil fungsi kirim
    }
  };

  // Mengatur scroll otomatis ke pesan terbaru yang dikirim pengguna setiap kali chatHistory diperbarui
  useEffect(() => {
    if (chatContainerRef.current && lastUserMessageIndexRef.current !== null) {
      const lastUserMessageIndex = lastUserMessageIndexRef.current;
      const lastUserMessageElement =
        chatContainerRef.current.children[lastUserMessageIndex];

      // Scroll ke elemen pesan pengguna terakhir
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
          {/* Bagian Chat History */}
          <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-4 h-[500px] md:h-[850px] lg:h-[550px] important">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Chat History
            </h2>
            <div
              ref={chatContainerRef} // Tambahkan ref di sini
              className="space-y-4 p-4 bg-gray-50 dark:bg-gray-900 h-[500px] md:h-[850px] lg:h-[550px] overflow-y-auto rounded-lg shadow-md"
            >
              {chatHistory.map((chat, index) => (
                <div key={index} className="space-y-2">
                  {/* Query (Pesan pengguna) */}
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

                  {/* Response (Pesan Bot/Sistem) */}
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

          {/* Input dan Tombol Kirim */}
          <div className="mt-4 flex items-center bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
            <textarea
              className="flex-1 h-12 max-h-32 resize-none overflow-y-auto px-4 py-3 text-gray-700 dark:text-white bg-transparent focus:outline-none"
              placeholder="Type a message..."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Tambahkan event handler
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
