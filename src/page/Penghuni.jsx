import React from 'react';
import { Link } from 'react-router-dom';

function Penghuni() {
  const listPenghuni = [
    { nama: "Siti Lestari", kamar: "121", kontak: "0812-xxxx-xxxx", status: "Aktif" },
    { nama: "Dian Pratama", kamar: "122", kontak: "0857-xxxx-xxxx", status: "Aktif" },
    { nama: "Budi Santoso", kamar: "123", kontak: "0812-xxxx-xxxx", status: "Aktif" }
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
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white border-l-2 border-white rounded shadow-inner">👥 PENGHUNI</div>
          <Link to="/pembayaran" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white rounded transition">💳 PEMBAYARAN</Link>
        </nav>
      </aside>

      {/* KONTEN UTAMA */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-6">
        <header className="border-b border-gray-300 pb-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Data Penghuni</h1>
            <p className="text-xs text-gray-600 mt-0.5">Daftar pelanggan dan penghuni aktif properti.</p>
          </div>
        </header>

        <div className="bg-white border border-gray-300 rounded overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs font-medium">
            <thead className="bg-black text-white uppercase text-[10px] font-bold tracking-wider">
              <tr>
                <th className="px-6 py-3.5">Nama Penghuni</th>
                <th className="px-6 py-3.5">No. Kamar</th>
                <th className="px-6 py-3.5">Kontak</th>
                <th className="px-6 py-3.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listPenghuni.map((p, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold">{p.nama}</td>
                  <td className="px-6 py-4">{p.kamar}</td>
                  <td className="px-6 py-4 text-gray-500">{p.kontak}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 uppercase rounded">{p.status}</span>
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

export default Penghuni;