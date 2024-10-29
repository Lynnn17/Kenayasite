import ig from "../assets/instagram.png";
import yt from "../assets/youtube.png";
import linked from "../assets/linked.png";
import footerBg from "../assets/bgfooter2.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="text-justify bg-cover bg-center text-white py-10 px-8 lg:px-16"
      style={{
        backgroundImage: `url(${footerBg})`, // Menggunakan gambar sebagai background
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kenayasite</h3>
            <p className="text-sm mb-4">
              Kami menyediakan solusi pembuatan dan pemeliharaan website yang
              cepat, interaktif, dan terjangkau dengan jaminan kepuasan.
            </p>
            <p className="text-sm">
              Dapatkan website berkualitas untuk kebutuhan Anda dengan layanan
              yang profesional.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <span className="text-lg">✉</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bingarpuri@gmail.com"
                  className="ml-5 hover:text-[#6eacda] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bingarpuri@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📞</span>
                <a
                  href="https://wa.me/6282244708683"
                  className="ml-3 hover:text-[#6eacda] transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 822-4470-8683
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📍</span>
                <a
                  href="https://maps.app.goo.gl/btg9nEiRvHDDporV9"
                  className="hover:text-[#6eacda] transition duration-300 ml-3"
                >
                  Jl. Gubernur Sunandar Priyosudarmo No. 20, Kec. Krian, Kab.
                  Sidoarjo
                </a>
              </li>
            </ul>
          </div>

          {/* Berlangganan */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Promotion</h3>
            <p className="text-sm mb-4">
              Dapatkan promo layanan Website, penawaran, dan update terbaru.
            </p>
            <div className="group mt-4">
              <Link
                to="promo"
                smooth={true}
                duration={1000}
                className="inline-flex items-center justify-center px-10 py-2 bg-[#6eacda] text-black font-bold border border-gray-700 hover:bg-blue-700 rounded-full transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
              >
                Mulai
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        {/* Tombol */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} PT Kenaya Perkasa TBK. All rights
            reserved.
          </p>

          {/* Social Media */}
          <ul className="flex space-x-6">
            {[
              {
                name: "Youtube",
                icon: yt,
                url: "https://www.youtube.com/@ganjel-02",
              },
              {
                name: "Instagram",
                icon: ig,
                url: "https://www.instagram.com/bingarkp/",
              },
              {
                name: "LinkedIn",
                icon: linked,
                url: "https://linkedin.com",
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="group mt-4">
            <a
              href="https://wa.me/6282244708683"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#6eacda] text-black font-bold border border-gray-700 rounded-full transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
