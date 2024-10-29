import { CheckIcon } from "@heroicons/react/20/solid";
import icon from "../../assets/icon.png";
import { useState } from "react";

const packages = [
  {
    title: "Paket START UP",
    oldPrice: "999,000",
    newPrice: "799,000",
    features: [
      "Website Responsif Max.5 Halaman",
      "Optimasi SEO Dasar",
      "Maintenance 1x Sebulan",
      "Standard Website Security",
      "GUARANTEE Teknis Hingga 3 Bulan",
      "Laporan Kinerja Bulanan.",
      "Bebas Konsultasi Selamanya.",
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=bingarpuri@gmail.com",
  },
  {
    title: "Paket SCALE UP",
    oldPrice: "1,599,000",
    newPrice: "1,249,000",
    features: [
      "Website Responsif Max.10 Halaman",
      "Optimasi SEO Lanjutan",
      "Maintenance 2x Sebulan",
      "Ekstra Website Security",
      "Laporan Kinerja Bulanan",
      "GUARANTEE Teknis Hingga 6 Bulan",
      "Bebas Konsultasi Selamanya.",
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=bingarpuri@gmail.com",
  },
  {
    title: "Paket ENTERPRISE",
    oldPrice: "2,199,000",
    newPrice: "1,899,000",
    features: [
      "Website Premium",
      "SEO Pro & Strategi Konten",
      "Maintenance Bulanan Premium",
      "Highly Performance Website Security",
      "Laporan Kinerja Komprehensif",
      "GUARANTEE Teknis Prioritas Setahun",
      "Bebas Konsultasi Selamanya",
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=bingarpuri@gmail.com",
  },
];

const Pemesanan = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div
      className="py-24 sm:py-32 text-white xl:mt-2"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Pilihan Paket */}
      <div className="mx-auto px-5 md:px-10 xl:px-8 md:-mt-12 xl:-mt-10">
        <div className="mx-auto sm:text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight  text-4xl xl:text-5xl text-[#0D255E]">
            Harga Spesial
          </h2>
          <p className="text-center mt-6 text-lg text-black text-sm md:px-20">
            Dapatkan Website profesional dengan harga terjangkau, revisi
            sepuasnya, dan hasil cepat untuk meningkatkan citra bisnis Anda!
          </p>
        </div>

        {/* Tiga Paket */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 mx-2 xl:mx-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-3xl bg-gradient-to-tr from-[#FFFFFF] from-60% via-[#BDE2FF] via-80% to-[#FFFFFF] to-90% text-gray-900 p-8 ring-1 ring-gray-200 xl:flex xl:flex-col xl:justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {pkg.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      {feature === "Laporan Kinerja Bulanan." ||
                      feature === "Bebas Konsultasi Selamanya." ? (
                        <img src={icon} alt="Icon" className="h-6 w-6" />
                      ) : (
                        <CheckIcon
                          className="h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">{pkg.description}</p>
              </div>
              <div className="mt-8">
                <p className="text-sm line-through text-red-500">
                  {pkg.oldPrice}
                </p>
                <p className="text-4xl font-bold text-gray-900">
                  {pkg.newPrice}
                </p>
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
                >
                  AMBIL PROMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="border border-[#7b50c2] bg-[#E5F6FF] text-[#1D2B50] hover:bg-[#eaeefd]  rounded-xl  mt-16 mx-6 mb-4 md:mx-10 md:-mb-8 md:mt-24 py-10 px-4 md:px-8 xl:mx-14 xl:px-12">
        <h2 className="text-center text-3xl font-bold mb-8">
          Jawaban dari semua pertanyaan
        </h2>
        <div className="mx-auto px-4">
          {/* FAQ 1 */}
          <div className="border-b border-gray-700">
            <button
              className="flex justify-between w-full py-4 text-left focus:outline-none"
              onClick={() => toggle(1)}
            >
              <span>Layanan apa saja yang ditawarkan oleh Kenayasite?</span>
              <span>{open === 1 ? "-" : "+"}</span>
            </button>
            {open === 1 && (
              <div className="pb-4 text-gray-400">
                Kenayasite menyediakan berbagai layanan seperti, Optimisasi Mesin Pencari (SEO), Pemeliharaan Website, Keamanan Website, dan Pembuatan Website berkualitas tinggi yang sesuai dengan kebutuhan
                bisnis Anda.
              </div>
            )}
          </div>
          {/* FAQ 2 */}
          <div className="border-b border-gray-700">
            <button
              className="flex justify-between w-full py-4 text-left focus:outline-none"
              onClick={() => toggle(2)}
            >
              <span>Bagaimana proses Pembuatan Website di Kenaya?</span>
              <span>{open === 2 ? "-" : "+"}</span>
            </button>
            {open === 2 && (
              <div className="pb-4 text-gray-400">
                Proses pembuatan website di Kenayasite dimulai dengan sesi konsultasi untuk memahami visi dan kebutuhan unik bisnis Anda. Setelah itu, tim kami merancang konsep visual dan fungsional website, memberikan Anda pratinjau untuk memastikan semua aspek sesuai keinginan. Setelah disetujui, kami mulai tahap pengembangan, dengan menambahkan fitur-fitur interaktif, SEO, dan keamanan sesuai paket yang Anda pilih. Website akan melalui tahap uji coba intensif untuk memastikan performa maksimal dan pengalaman pengguna yang nyaman. Akhirnya, website Anda diluncurkan secara resmi, dan Anda tetap mendapat layanan maintenance serta dukungan penuh dari tim kami.
              </div>
            )}
          </div>
          {/* FAQ 3 */}
          <div className="border-b border-gray-700">
            <button
              className="flex justify-between w-full py-4 text-left focus:outline-none"
              onClick={() => toggle(3)}
            >
              <span>
                Apakah saya bisa mendapatkan Website yang disesuaikan dengan
                preferensi saya?
              </span>
              <span>{open === 3 ? "-" : "+"}</span>
            </button>
            {open === 3 && (
              <div className="pb-4 text-gray-400">
                Tentu saja! kami memahami bahwa setiap bisnis memiliki kebutuhan dan preferensi unik, sehingga kami menyediakan layanan kustomisasi penuh untuk website Anda. Mulai dari desain visual, pilihan warna, tata letak, hingga fitur khusus seperti formulir kontak, integrasi media sosial, atau toko online, semua bisa disesuaikan agar sesuai dengan identitas dan visi bisnis Anda. Tim kami akan bekerja sama dengan Anda di setiap tahap, memastikan setiap detail mencerminkan preferensi Anda dengan sempurna.
              </div>
            )}
          </div>
          {/* FAQ 4 */}
          <div className="border-b border-gray-700">
            <button
              className="flex justify-between w-full py-4 text-left focus:outline-none"
              onClick={() => toggle(4)}
            >
              <span>Apakah Kenayasite juga memberikan Garansi Teknis setelah pemesanan Website diselesaikan?</span>
              <span>{open === 4 ? "-" : "+"}</span>
            </button>
            {open === 4 && (
              <div className="pb-4 text-gray-400">
                Benar! Kenayasite memberikan garansi teknis untuk memastikan website Anda tetap optimal dan aman setelah peluncuran. Dengan garansi teknis ini, Anda mendapatkan dukungan penuh dari tim kami untuk memperbaiki bug, mengatasi kendala teknis, dan melakukan update sistem sesuai kebutuhan selama masa garansi. Kami siap membantu menjaga performa website Anda, memberikan rasa tenang sehingga Anda bisa fokus mengembangkan bisnis.
              </div>
            )}
          </div>
          {/* FAQ 5 */}
          <div className="border-b border-gray-700">
            <button
              className="flex justify-between w-full py-4 text-left focus:outline-none"
              onClick={() => toggle(5)}
            >
              <span>
                Berapa lama waktu yang dibutuhkan untuk menyelesaikan pesanan Website saya?
              </span>
              <span>{open === 5 ? "-" : "+"}</span>
            </button>
            {open === 5 && (
              <div className="pb-4 text-gray-400">
                Waktu penyelesaian pesanan website Anda di Kenaya bervariasi tergantung pada kompleksitas dan fitur yang Anda inginkan. Umumnya, untuk website sederhana, proses pembuatan dapat memakan waktu antara 2 hingga 4 minggu. Namun, untuk website yang lebih kompleks dengan fitur kustom atau integrasi e-commerce, waktu pengerjaan bisa memakan waktu 4 hingga 8 minggu. Kami akan memberikan jadwal yang jelas dan terus memperbarui Anda mengenai kemajuan proyek, sehingga Anda selalu tahu kapan website Anda akan siap diluncurkan.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pemesanan;
