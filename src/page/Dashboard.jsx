import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

  const penghuniTerbaru = [
    { nama: "Siti Lestari", kamar: "121", tglMasuk: "12 Mei 2026", status: "Lunas" },
    { nama: "Dian Pratama", kamar: "122", tglMasuk: "01 Juni 2026", status: "Lunas" },
    { nama: "Budi Santoso", kamar: "123", tglMasuk: "10 Juni 2026", status: "Lunas" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] font-sans antialiased text-gray-900 selection:bg-black selection:text-white">
      
      
      <aside className="hidden md:flex flex-col w-64 bg-black text-white p-6 border-r border-zinc-800 select-none">
        <div className="flex items-center gap-3 mb-10 border-b border-zinc-800 pb-5">
          <svg className="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none">
            <path d="M25 20V80H35V53L55 80H68L45 49L65 20H52L35 43V20H25Z" fill="currentColor" />
          </svg>
          <span className="text-sm font-bold tracking-[0.15em] uppercase font-mono text-zinc-200">KAFANA VISTA</span>
        </div>

       
        <nav className="flex-1 space-y-1 text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white border-l-2 border-white rounded shadow-inner cursor-default">
            📂 DASHBOARD
          </div>
          <Link to="/detail-kamar" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition block">
            🏢 DATA KAMAR
          </Link>
          <Link to="/penghuni" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition block">
            👥 PENGHUNI
          </Link>
          <Link to="/pembayaran" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition block">
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

      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
        
        {/* Header Dashboard */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-300 pb-5">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Dashboard Utama</h1>
            <p className="text-xs text-gray-600 mt-0.5">Selamat datang kembali, Budi Santoso. Berikut ringkasan kos Anda hari ini.</p>
          </div>
          <div className="text-xs font-bold bg-white border border-black px-3 py-2 rounded shadow-sm">
            📅 Status: Real-time Aktif
          </div>
        </header>

        {/* Grid Stats Tiga Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Unit Kamar</p>
            <p className="text-3xl font-black mt-1 text-black">18 Unit</p>
            <div className="text-[10px] text-gray-500 mt-2 font-medium">Kapasitas maksimal saat ini</div>
          </div>
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Pemasukan Bulan Ini</p>
            <p className="text-3xl font-black mt-1 text-zinc-950">Rp 24.750.000</p>
            <div className="text-[10px] text-green-600 mt-2 font-bold">✓ 100% Tagihan Terbayar</div>
          </div>
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Ketersediaan Kosong</p>
            <p className="text-3xl font-black mt-1 text-gray-700">6 Unit</p>
            <div className="text-[10px] text-amber-600 mt-2 font-bold">⚠️ Siap pasarkan iklan</div>
          </div>
        </div>

        {/* Bagian Bawah: Grafik & Tabel Aktivitas Terbaru */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Grafik Luas (Kiri) */}
          <div className="lg:col-span-2 bg-white p-6 border border-gray-300 rounded shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">Grafik Trend Pemasukan</h3>
              <div className="h-56 bg-gray-50 border border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-xs text-gray-400 font-bold gap-1">
                <span>📈 [ Grafik Statistik Garis Bulanan ]</span>
                <span className="text-[10px] font-medium text-gray-400/80">Januari - Juni 2026</span>
              </div>
            </div>
          </div>

          {/* Kolom Info Aktivitas Penghuni Baru (Kanan) */}
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest border-b border-gray-100 pb-2">Penghuni Terbaru</h3>
            
            <div className="space-y-3">
              {penghuniTerbaru.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded text-xs">
                  <div>
                    <p className="font-bold text-gray-900">{item.nama}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Kamar {item.kamar} • {item.tglMasuk}</p>
                  </div>
                  <span className="bg-black text-white px-2 py-0.5 text-[9px] font-bold uppercase rounded">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <Link 
              to="/penghuni" 
              className="block text-center border border-black py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-black hover:text-white transition"
            >
              Lihat Semua Penghuni
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;