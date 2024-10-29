import foto4 from "../../assets/gedung1.png";
import vuejs from "../../assets/vuejs.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravell.png";
import nodejs from "../../assets/nodejs.png";
import Inkscape from "../../assets/Inkscape.png";
import affinity from "../../assets/affinity.png";
import kualitas from "../../assets/iquliaty.png";
import profesional from "../../assets/iprofesional.png";
import kreatif from "../../assets/ikreatif.png";
import totalitas from "../../assets/itotality.png";
import ontime from "../../assets/iontime.png";
import fastrespon from "../../assets/iresponse.png";

const Deskripsi = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 items-center gap-12">
          {/* Text Section */}
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

      {/* Logo Section */}
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
        <p className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] p-6 rounded-lg flex flex-col items-center justify-center h-24 font-sans text-center text-lg lg:text-xl mt-11">
          Framework dan Software terbaik yang membantu Kenayasite untuk
          menghasilkan Website yang Professional dan Interaktif
        </p>
      </div>

      {/* Why Kenaya Section */}
      <div className="mt-0 text-center">
        <h2 className="font-bold text-3xl lg:text-5xl mb-5 lg:mb-8 text-[#03346E]">
          Kenapa harus Kenayasite?
        </h2>
        <p className="text-lg lg:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto">
          Kami adalah pilihan tepat untuk Anda para pebisnis hebat yang
          membutuhkan website profesional, kreatif, dan berkualitas. Dengan
          layanan cepat dan hasil yang memuaskan
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Berkualitas",
              description:
                "Kenayasite menghasilkan website professional berstandard Internasional berkualitas tinggi dengan fokus pada interaktif, keahlian, dan kepuasan klien.",
              icon: kualitas,
            },
            {
              title: "Professional",
              description:
                "Di Kenayasite, kami menjamin kualitas maintenence yang profesional, didukung oleh tim ahli yang berkomitmen untuk memenuhi kebutuhan klien dengan tepat dan efisien.",
              icon: profesional,
            },
            {
              title: "Inovatif",
              description:
                "Kenayasite mengedepankan inovasi dalam setiap fitur website, menciptakan solusi unik yang memperkuat identitas dan visi merek klien.",
              icon: kreatif,
            },
            {
              title: "Totalitas",
              description:
                "Di Kenayasite, kami berkomitmen pada totalitas layanan website, memastikan setiap detail dikerjakan dengan dedikasi penuh untuk mencapai hasil terbaik bagi klien.",
              icon: totalitas,
            },
            {
              title: "On Time",
              description:
                "Kenayasite selalu mengutamakan penyelesaian website tepat waktu, memastikan kepuasan klien tanpa mengorbankan kualitas.",
              icon: ontime,
            },
            {
              title: "Fast Response",
              description:
                "Kenayasite memberikan layanan chat dengan fast response, siap merespon kebutuhan klien dengan cepat dan efisien dalam batas waktu jam kerja.",
              icon: fastrespon,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#7b50c2] bg-[#E5F6FF] text-[#1D2B50] hover:bg-[#eaeefd] hover:text-black p-6 rounded-lg flex flex-col items-center justify-center h-58 shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-auto mb-4"
              />
              <h3 className="font-bold text-xl lg:text-2xl mb-2">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base text-center text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
