import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Views/Beranda";
import Portofolio from "./Views/Portofolio";
import Layanan from "./Views/Layanan";
import Pemesanan from "./Views/Pemesanan";
import Chatbot from "./Views/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
