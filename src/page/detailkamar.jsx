import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <--- PENTING: Untuk navigasi antar halaman

function DetailKamar() {
  const navigate = useNavigate();
  
  // Data detail Kamar
  const detailKamar = {
    no: "123",
    type: "Deluxe Suite",
    harga: "Rp 1.850.000 / Bulan",
    status: "Terisi",
    ukuran: "4 x 5 Meter",
    listrik: "Token Mandiri (900 Watt)",
    
    penghuni: {
      nama: "Budi Santoso",
      kontak: "0812-3456-7890",
      masuk: "10 Januari 2026",
      durasi: "6 Bulan (Selesai 10 Juli 2026)",
      statusKTP: "Terverifikasi"
    },

    fasilitas: [
      "Pendingin Ruangan (AC 1 PK)",
      "Kamar Mandi Dalam (Shower & Water Heater)",
      "Kasur Springbed Queen Size (160x200)",
      "Lemari Pakaian 3 Pintu & Meja Kerja",
      "Koneksi Wi-Fi High-Speed Dedicated",
      "Balkon Pribadi Hadap Depan"
    ]
  };

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] font-sans antialiased text-gray-900 selection:bg-black selection:text-white">
      
      {/* ================= SIDEBAR (KIRI) ================= */}
      <aside className="hidden md:flex flex-col w-64 bg-black text-white p-6 border-r border-zinc-800 select-none">
        <div className="flex items-center gap-3 mb-10 border-b border-zinc-800 pb-5">
          <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none">
            <path d="M25 20V80H35V53L55 80H68L45 49L65 20H52L35 43V20H25Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-bold tracking-[0.15em] uppercase font-mono text-zinc-200">KAFANA VISTA</span>
        </div>

        {/* MENU NAVIGASI: Sekarang semuanya dibungkus <Link> agar BISA DIPENCET */}
        <nav className="flex-1 space-y-1 text-xs font-bold uppercase tracking-wider">
          
          <Link 
            to="/dashboard" 
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded cursor-pointer transition block"
          >
            📂 DASHBOARD
          </Link>
          
          {/* Menu Data Kamar sedang aktif */}
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white border-l-2 border-white rounded shadow-inner font-extrabold cursor-default">
            🏢 DATA KAMAR
          </div>
          
          <Link 
            to="/penghuni" 
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded cursor-pointer transition block"
          >
            👥 PENGHUNI
          </Link>
          
          <Link 
            to="/pembayaran" 
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded cursor-pointer transition block"
          >
            💳 PEMBAYARAN
          </Link>
          
        </nav>

        <div className="border-t border-zinc-800 pt-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-xs text-white font-bold">BS</div>
          <div>
            <h4 className="text-xs font-bold">Budi Santoso</h4>
            <p className="text-[10px] text-zinc-500">Pemilik Properti</p>
          </div>
        </div>
      </aside>

      {/* ================= KONTEN DETAIL (KANAN) ================= */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
        
        {/* Header Atas */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-5">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')} 
              className="border border-black p-2 rounded hover:bg-black hover:text-white transition cursor-pointer"
              title="Kembali ke Login"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-black tracking-tight">Kamar {detailKamar.no}</h1>
                <span className="px-2.5 py-0.5 border border-black text-[10px] font-bold uppercase tracking-wider bg-black text-white rounded-full">
                  {detailKamar.status}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">Spesifikasi unit dan manajemen penghuni aktif.</p>
            </div>
          </div>
        </div>

        {/* Kotak Konten Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-300 rounded p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest border-b border-gray-100 pb-2">Spesifikasi Kamar</h3>
              <div className="grid grid-cols-2 gap-6 text-xs font-medium">
                <div>
                  <p className="text-gray-500 uppercase text-[10px] tracking-wider">Tipe Kamar</p>
                  <p className="text-sm font-bold mt-0.5">{detailKamar.type}</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-[10px] tracking-wider">Harga Sewa</p>
                  <p className="text-sm font-bold text-zinc-950 mt-0.5">{detailKamar.harga}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest border-b border-gray-100 pb-2">Fasilitas Terpasang</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
                {detailKamar.fasilitas.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded p-6 shadow-sm space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest border-b border-gray-200 pb-2">Penghuni Aktif</h3>
            <div className="space-y-4 text-xs font-medium">
              <div>
                <p className="text-gray-500 uppercase text-[10px] tracking-wider">Nama Lengkap</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{detailKamar.penghuni.nama}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase text-[10px] tracking-wider">Kontak WA</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{detailKamar.penghuni.kontak}</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default DetailKamar;