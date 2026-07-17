import React from 'react';
import { Link } from 'react-router-dom';

function Pembayaran() {
  const riwayatPembayaran = [
    { nama: "Siti Lestari", kamar: "121", tagihan: "Rp 1.200.000", status: "Lunas" },
    { nama: "Dian Pratama", kamar: "122", tagihan: "Rp 1.250.000", status: "Belum Bayar" },
    { nama: "Budi Santoso", kamar: "123", tagihan: "Rp 1.850.000", status: "Lunas" }
  ];

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] font-sans antialiased text-gray-900">
      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-black text-white p-6 border-r border-zinc-800 select-none">
        <div className="flex items-center gap-3 mb-10 border-b border-zinc-800 pb-5">
          <span className="text-sm font-bold tracking-[0.15em] uppercase font-mono">KAFANA VISTA</span>
        </div>
        <nav className="flex-1 space-y-1 text-xs font-bold uppercase tracking-wider">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition">📂 DASHBOARD</Link>
          <Link to="/detail-kamar" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition">🏢 DATA KAMAR</Link>
          <Link to="/penghuni" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition">👥 PENGHUNI</Link>
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white border-l-2 border-white rounded shadow-inner">💳 PEMBAYARAN</div>
        </nav>
      </aside>

      {/* KONTEN UTAMA */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-6">
        <header className="border-b border-gray-300 pb-5">
          <h1 className="text-2xl font-black tracking-tight">Manajemen Pembayaran</h1>
          <p className="text-xs text-gray-600 mt-0.5">Pantau status pembayaran sewa bulanan kamar.</p>
        </header>

        <div className="bg-white border border-gray-300 rounded overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs font-medium">
            <tbody className="divide-y divide-gray-200">
              {riwayatPembayaran.map((p, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold">{p.nama} (Kamar {p.kamar})</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{p.tagihan}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[9px] font-bold uppercase rounded ${
                      p.status === 'Lunas' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                    }`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Pembayaran;