import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Views/Beranda";
import Chatbot from "./Views/Chatbot";
import { Link, Element } from "react-scroll";

function App() {
  return (
    // <div>
    //   {/* Menu navigasi */}
    //   <nav>
    //     <Link to="section1" smooth={true} duration={500}>
    //       Scroll ke Section 1
    //     </Link>
    //     <Link to="section2" smooth={true} duration={500}>
    //       Scroll ke Section 2
    //     </Link>
    //   </nav>

    //   {/* Konten dengan elemen target scroll */}
    //   <Element
    //     name="section1"
    //     className="section"
    //     style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
    //   >
    //     <h2>Section 1</h2>
    //   </Element>

    //   <Element
    //     name="section2"
    //     className="section"
    //     style={{ height: "100vh", backgroundColor: "#e0e0e0" }}
    //   >
    //     <h2>Section 2</h2>
    //   </Element>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
