import React, { useEffect, useState } from "react";
import Welcome from "../Component/Beranda/Welcome";
import Navbar from "../Component/Navbar";
import Deskripsi from "../Component/Beranda/Deskripsi";
import Promo from "../Component/Beranda/Promo";
import Klien from "../Component/Beranda/Klien";
import Footer from "../Component/Footer";
import backsound from "../assets/backsound2.mp3";
import Keunggulan from "../Component/Beranda/Keunggulan";

function Beranda() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const audio = document.getElementById("background-audio");
    audio.pause();
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById("background-audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#370e58] blur(10%) min-h-screen">
      <div className="text-slate-200">
        <Navbar />
        <Welcome />
        <div className="animated-gradient-bg text-black py-16 px-8 lg:px-16">
          <Deskripsi />
          <Keunggulan />
          <Promo />
          <Klien />
          <style jsx>{`
            .animated-gradient-bg {
              background: linear-gradient(
                45deg,
                #af8cff,
                #d8a6ff,
                #ffffff,
                #deb8ff
              );
              background-size: 400% 400%;
              animation: gradientAnimation 10s ease infinite;
            }

            @keyframes gradientAnimation {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .logo-appear-0 {
              animation-delay: 0.2s;
            }
            .logo-appear-1 {
              animation-delay: 0.4s;
            }
            .logo-appear-2 {
              animation-delay: 0.6s;
            }
            .logo-appear-3 {
              animation-delay: 0.8s;
            }
            .logo-appear-4 {
              animation-delay: 1s;
            }
            .logo-appear-5 {
              animation-delay: 1.2s;
            }

            .scrollbar-hide::-webkit-scrollbar {
              display: none; /* Chrome, Safari, and Opera */
            }
          `}</style>
        </div>
        <Footer />
      </div>

      <audio id="background-audio" loop>
        <source src={backsound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 bg-transparent text-white px-3 py-1 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition"
        style={{
          zIndex: 9999,
          border: "2px solid white",
        }}
      >
        {isPlaying ? (
          <i className="fas fa-pause fa-2x"></i>
        ) : (
          <i className="fas fa-play fa-2x"></i>
        )}
      </button>
    </div>
  );
}

export default Beranda;
