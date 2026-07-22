import React from 'react';

export default function TestimoniCard({ testimoni }) {
  const data = testimoni || {
    nama: "Ahmad Rizky",
    peran: "Penghuni Kos Barokah",
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    ulasan: "Tempatnya nyaman banget, bersih, dan lokasinya strategis. Wi-Fi cepat cocok buat tugas!",
    tanggal: "12 Juli 2026"
  };

  return (
    <div className="relative bg-[#1A1816] border border-[#382E25] hover:border-[#B48A35]/60 p-6 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#B48A35]/10 flex flex-col justify-between group">
      
      {/* Tanda Kutip Hiasan di Pojok */}
      <div className="absolute top-4 right-4 text-4xl text-[#382E25] group-hover:text-[#B48A35]/20 transition-colors font-serif select-none pointer-events-none">
        “
      </div>

      <div>
        {/* Rating Bintang & Tanggal */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < data.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-700'}`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-[10px] text-stone-500 tracking-wider font-mono">{data.tanggal}</span>
        </div>

        {/* Isi Ulasan */}
        <p className="text-xs text-stone-300 leading-relaxed italic mb-6 relative z-10">
          "{data.ulasan}"
        </p>
      </div>

      {/* Profile / User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#2A241F] group-hover:border-[#382E25] transition-colors">
        <div className="relative">
          <img 
            src={data.foto} 
            alt={data.nama} 
            className="w-10 h-10 rounded-full object-cover border-2 border-[#B48A35]/50 group-hover:border-[#B48A35] transition-colors"
          />
        </div>
        <div>
          <h4 className="text-xs font-bold text-stone-100 group-hover:text-[#D4AF37] transition-colors">
            {data.nama}
          </h4>
          <span className="inline-block text-[9px] font-semibold text-[#B48A35] bg-[#2A2218] px-2 py-0.5 rounded-full mt-0.5 border border-[#B48A35]/20">
            {data.peran}
          </span>
        </div>
      </div>

    </div>
  );
}