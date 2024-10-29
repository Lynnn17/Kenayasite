import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Views/Beranda";
import Chatbot from "./Views/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
