import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dataKos = [
  { 
    id: 1, 
    nama: "Kos Putri Sakinah Eksklusif", 
    harga: "Rp 1.500.000 / bln", 
    lokasi: "Bojongsoang, Bandung", 
    // Menggunakan satu variabel gambar yang konsisten
    gambar: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    detailKategori: {
      tipeKamar: [
        "Kamar Mandi Dalam: Dilengkapi kloset duduk, shower, dan air hangat.",
        "Kamar Ber-AC: Udara sejuk dengan token listrik mandiri."
      ],
      fasilitasKamar: [
        "Kasur (beserta seprai) & bantal empuk",
        "Lemari pakaian kayu 2 pintu",
        "Meja dan kursi belajar minimalis"
      ],
      fasilitasUmum: [
        "Area parkir motor aman dan teduh",
        "Dapur bersama dilengkapi dispenser dan kulkas",
        "Area jemur pakaian bersama"
      ],
      keamanan: [
        "Dipantau kamera CCTV 24 jam",
        "Akses gerbang bebas menggunakan kunci mandiri"
      ]
    }
  },
  { 
    id: 2, 
    nama: "Kos Putra Barokah Standar", 
    harga: "Rp 750.000 / bln", 
    lokasi: "Dekat Kampus Utama", 
    gambar: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
    detailKategori: {
      tipeKamar: [
        "Kamar Mandi Luar: Kamar mandi luar yang selalu dijaga bersih.",
        "Non-AC: Kamar sejuk dengan ventilasi udara yang baik."
      ],
      fasilitasKamar: [
        "Kasur single foam",
        "Lemari pakaian minimalis",
        "Meja belajar lesehan"
      ],
      fasilitasUmum: [
        "Area parkir motor luas",
        "Kamar mandi luar 3 unit",
        "Dapur bersama sederhana"
      ],
      keamanan: [
        "Lingkungan aman terjaga",
        "Akses gerbang terkunci rapi"
      ]
    }
  }
];

export default function Dashboard() {
  const [tabAktif, setTabAktif] = useState('kos');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold text-[#1A1613]">Our Rooms</h1>
          <div className="w-12 h-[2px] bg-[#B48A35] mx-auto mt-2"></div>
        </header>

        <div>
          {dataKos.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate('/detail-kamar', { state: { properti: item, tipe: tabAktif } })}
              className="bg-[#1A1613] text-white rounded-none overflow-hidden border border-[#8C6943]/20 shadow-lg mb-6 cursor-pointer hover:border-[#B48A35] transition-all duration-300"
            >
              {/* GAMBAR DASHBOARD */}
              <img 
                src={item.gambar} 
                alt={item.nama} 
                className="w-full h-48 object-cover" 
              />
              
              <div className="p-5">
                <h3 className="font-serif text-lg text-stone-100">{item.nama}</h3>
                <p className="text-[#B48A35] font-bold mt-1">{item.harga}</p>
                <div className="mt-4 pt-3 border-t border-[#8C6943]/20 text-right">
                  <span className="text-xs uppercase tracking-wider text-[#B48A35] font-semibold">
                    Lihat Detail Kamar &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}