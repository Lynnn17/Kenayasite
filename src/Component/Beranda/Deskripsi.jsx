import foto4 from "../../assets/gedung1.png";
import vuejs from "../../assets/vuejs.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravell.png";
import nodejs from "../../assets/nodejs.png";
import Inkscape from "../../assets/Inkscape.png";
import affinity from "../../assets/affinity.png";

import { Element } from "react-scroll";

const Deskripsi = () => {
  return (
    <Element name="layanan">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 items-center gap-12">
          <div className="lg:pl-14">
            <h1 className="font-helvetica font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-5 text-[#0D255E]">
              Pelayanan Jasa Pembuatan dan Pemeliharaan Website
            </h1>
            <p className="font-sans text-lg lg:text-xl mb-5 lg:mb-8 text-justify">
              Siap melayani dengan berpengalaman untuk seluruh klien dari
              berbagai daerah. Kami melayani secara online dan tatap muka
              langsung.
            </p>
          </div>

          <div className="lg:w-[520px] lg:ml-10">
            <img
              src={foto4}
              alt="Kenaya Hero"
              className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 md:pt-12">
        <div className="grid grid-cols-6 gap-8 justify-center">
          {[react, vuejs, laravel, nodejs, Inkscape, affinity].map(
            (logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Logo ${idx}`}
                className="w-24 h-auto transform transition duration-300 hover:scale-110"
              />
            )
          )}
        </div>
        <p className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] p-6 rounded-lg flex flex-col items-center justify-center h-24 font-sans text-center text-sm md:text-lg lg:text-xl mt-11">
          Framework dan Software terbaik yang membantu Kenayasite untuk
          menghasilkan Website yang Professional dan Interaktif
        </p>
      </div>
    </Element>
  );
};

export default Deskripsi;
