import React, { useEffect, useState } from "react";
import bgpanjang from "../../assets/bgungu.jpg";

const Welcome = () => {
  const [dots, setDots] = useState([]);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const dotCount = 35;
    const dotElements = [];
    for (let i = 0; i < dotCount; i++) {
      const delay = Math.random() * 8;
      const left = Math.random() * 100;
      const size = Math.random() * 4 + 2;
      dotElements.push({ delay, left, size });
    }
    setDots(dotElements);

    setTimeout(() => {
      setTextVisible(true);
    }, 300);
  }, []);

  return (
    <>
      <section
        className="relative px-6 py-16 -mt-10 md:mt-4 xl:mt-2 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${bgpanjang})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16">
          <center>
            <div className="lg:w-1/2 lg:mt-0">
              <h1
                className={`text-[40px] md:text-5xl lg:text-6xl font-bold font-sans mb-6 leading-tight transition-opacity duration-1000 ease-out transform ${
                  textVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Website Interaktif, Kinerja Inovatif -{" "}
                <span className="text-[#38BDF8]">
                  Kenayasite Solusi Terdepan
                </span>
              </h1>
              <p
                className={`font-sans text-slate-400 text-[15px] md:text-[20px] lg:text-1 mb-8 leading-relaxed text-justify transition-opacity duration-1000 ease-out transform ${
                  textVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Platform pelayanan jasa berkualitas, interaktif, dan inovatif
                untuk memenuhi kebutuhan bisnis Anda. Dapatkan solusi digital
                yang efektif dan efisien untuk memaksimalkan potensi bisnis
                Anda.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-sans bg-[#17A9E8] text-blue-950 px-6 py-3 font-bold rounded-lg hover:text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:scale-105 hover:text-black transition transform ${
                    textVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  Hi Kenaya!
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bingarpuri@gmail.com&su=Order%20Pembuatan%20Website&body=Halo,%0A%0ASaya%20ingin%20memesan%20pembuatan%20website.%20Saya%20harap%20kita%20bisa%20membahas%20lebih%20lanjut%20tentang%20kebutuhan%20dan%20preferensi%20saya.%0A%0ATerima%20kasih!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-sans bg-[#17A9E8] text-blue-950 px-6 py-3 font-bold rounded-lg hover:text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:scale-105 hover:text-black transition transform ${
                    textVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  Order Hire!
                </a>
              </div>
            </div>
          </center>
        </div>

        <style jsx>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(
                -150vh
              ); /* Move up beyond the visible area */
              opacity: 0;
            }
          }

          @keyframes bgMove {
            0% {
              background-position: center top; /* Start from the top */
            }
            100% {
              background-position: center bottom; /* Move to the bottom */
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Welcome;
