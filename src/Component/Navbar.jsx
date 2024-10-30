import logo from "../assets/kenaya.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`py-4 px-8 flex items-center justify-between text-[#e2e2b6] shadow-lg transition-transform duration-300 fixed top-0 w-full z-50 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center">
          <img className="w-[30px]" src={logo} alt="Logo" />
          <span className="ml-3 text-xl font-bold text-white">Kenayasite</span>
        </div>

        <div className="hover-[#17A9E8] hidden md:flex items-center gap-8 text-lg text-white font-mono">
          <a href="/" className="hover:text-[#6eacda] transition duration-300">
            Beranda
          </a>
          <Link
            to="layanan"
            smooth={true}
            duration={1000}
            className="hover:text-[#6eacda] transition duration-300"
          >
            Layanan
          </Link>
          <Link
            to="keunggulan"
            smooth={true}
            duration={1000}
            className="hover:text-[#6eacda] transition duration-300"
          >
            Keunggulan
          </Link>
          <Link
            to="promo"
            smooth={true}
            duration={1000}
            className="hover:text-[#6eacda] transition duration-300"
          >
            Promo
          </Link>
        </div>

        <button className="block md:hidden" onClick={handleSidebar}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {sidebarVisible && (
          <aside
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
            onClick={handleSidebar}
          >
            <div
              className="absolute top-0 right-0 w-54 h-auto bg-[#1f143d] shadow-lg p-6 rounded-l-xl transform transition-transform duration-300 ease-in-out"
              style={{
                transform: sidebarVisible
                  ? "translateX(1%)"
                  : "translateX(100%)",
              }}
            >
              <button className="flex justify-end mb-4" onClick={handleSidebar}>
                <svg
                  className="w-8 h-8 text-[#D9F0FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <ul className="flex flex-col text-[#FFFFFF] gap-6">
                <li>
                  <a
                    href="/"
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <Link
                    to="layanan"
                    smooth={true}
                    duration={1000}
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    to="keunggulan"
                    smooth={true}
                    duration={1000}
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Keunggulan
                  </Link>
                </li>
                <li>
                  <Link
                    to="promo"
                    smooth={true}
                    duration={1000}
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Promo
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
      <div className="pt-10 md:pt-12 lg:pt-14"></div>
    </div>
  );
};

export default Navbar;
