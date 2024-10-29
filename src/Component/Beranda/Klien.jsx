import React, { useEffect, useRef } from "react";
import klien1 from "../../assets/klien/klien1.jpeg";
import klien6 from "../../assets/klien/klien6.jpeg";
import klien2 from "../../assets/klien/klien2.jpeg";
import klien3 from "../../assets/klien/klien3.jpeg";
import klien4 from "../../assets/klien/klien4.jpeg";
import klien5 from "../../assets/klien/klien5.jpeg";
import klien7 from "../../assets/klien/klien7.jpeg";
import klien8 from "../../assets/klien/klien8.jpeg";
import klien9 from "../../assets/klien/klien9.jpeg";
import { Element } from "react-scroll";
const Klien = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const container = testimonialRef.current;

    const scrollTestimonials = () => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0 });
      } else {
        container.scrollBy({ left: 2, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(scrollTestimonials, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Element
        name="klien"
        className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-16"
      >
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Apa kata klien kami?
          </h2>
          <p className="mt-2 text-lg leading-7 text-gray-600">
            Dengar langsung dari pebisnis hebat yang mempercayai layanan kami.
          </p>
        </div>

        <div
          ref={testimonialRef}
          className="scroll-pl-6 mt-10 flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{ whiteSpace: "nowrap" }}
        >
          {[
            {
              name: "Gumi",
              company: "Shopee",
              role: "Mitra",
              feedback: "Website berkualitas.",
              image: klien1, // Add John's profile image
            },
            {
              name: "Itis",
              company: "Tokopedia",
              role: "Client",
              feedback: "Pelayanan ramah, responsif, revisi cepat.",
              image: klien2, // Add Jane's profile image
            },
            {
              name: "Plufy",
              company: "Lazada",
              role: "Client",
              feedback: "Website mengesankan, keahlian beragam proyek.",
              image: klien3, // Add Emily's profile image
            },
            {
              name: "Qyuu",
              company: "Blibli",
              role: "Mitra",
              feedback: "Kualitas unggul, bisnis profit.",
              image: klien4, // Add Michael's profile image
            },
            {
              name: "Alex",
              company: "Bukalapak",
              role: "Client",
              feedback: "Efisien, tepat waktu, sesuai brief.",
              image: klien5, // Add Sara's profile image
            },
            {
              name: "Anggam",
              company: "MatahariMall",
              role: "Mitra",
              feedback: "Efisien, tepat waktu, sesuai brief.",
              image: klien6, // Add Sara's profile image
            },
            {
              name: "Muti",
              company: "Plasa",
              role: "Mitra",
              feedback: "Efisien, tepat waktu, sesuai brief.",
              image: klien7, // Add Sara's profile image
            },
            {
              name: "Gang",
              company: "Blanja",
              role: "Client",
              feedback: "Efisien, tepat waktu, sesuai brief.",
              image: klien8, // Add Sara's profile image
            },
            {
              name: "Octo",
              company: "Tokobagus",
              role: "Mitra",
              feedback: "Efisien, tepat waktu, sesuai brief.",
              image: klien9, // Add Sara's profile image
            },
          ].map((client, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] flex-shrink-0 inline-block"
            >
              <div className="mx-auto max-w-xs flex flex-col items-center justify-between border rounded-lg p-4 shadow-md space-y-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 object-cover rounded-full mb-2"
                />
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {client.role} {client.company}
                  </p>
                  <p className="mt-1 text-xs text-gray-600 leading-5">
                    {client.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Klien;
