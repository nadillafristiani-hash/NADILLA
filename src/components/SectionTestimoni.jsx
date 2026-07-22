import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TestimoniCard from './TestimoniCard';

export default function SectionTestimoni() {
  // 1. DATA 22 TESTIMONI PENGHUNI
  const daftarTestimoni = [
    { id: 1, nama: "Ahmad Rizky", peran: "Penghuni Kos Barokah", foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150", rating: 5, ulasan: "Tempatnya nyaman banget, bersih, dan lokasinya strategis. Wi-Fi cepat cocok banget buat pengerjaan tugas kuliah!", tanggal: "12 Juli 2026" },
    { id: 2, nama: "Dina Olivia", peran: "Penyewa Kontrakan Sakinah", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", rating: 5, ulasan: "Proses pembayarannya gampang banget lewat web ini, serba otomatis dan pengelolanya sangat amanah.", tanggal: "05 Juni 2026" },
    { id: 3, nama: "Budi Santoso", peran: "Mahasiswa / Penghuni Kos", foto: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150", rating: 4, ulasan: "Fasilitas sesuai dengan foto di katalog, kamar mandi dalam bersih, lingkungan sekitarnya juga tenang.", tanggal: "18 Mei 2026" },
    { id: 4, nama: "Siti Rahmawati", peran: "Penghuni Kos Putri Kafana 1", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150", rating: 5, ulasan: "Keamanan 24 jam jadi merasa aman banget tinggal di sini. Ibu kosnya juga ramah dan baik!", tanggal: "10 Mei 2026" },
    { id: 5, nama: "Fajar Pratama", peran: "Penyewa Kontrakan Vista", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", rating: 5, ulasan: "Air lancar, parkiran luas untuk mobil dan motor. Sangat recommended buat yang cari rumah kontrakan.", tanggal: "01 Mei 2026" },
    { id: 6, nama: "Nadia Utami", peran: "Penghuni Kos Exclusive", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", rating: 5, ulasan: "Kamar sudah full furnished, tinggal bawa koper aja. AC dingin dan kebersihan koridor selalu terjaga.", tanggal: "28 April 2026" },
    { id: 7, nama: "Rian Hidayat", peran: "Penghuni Kos Putra Barokah", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", rating: 5, ulasan: "Sangat terbantu dengan web ini, kalau mau bayar bulanan nggak perlu repot transfer manual.", tanggal: "22 April 2026" },
    { id: 8, nama: "Clara Sinta", peran: "Penyewa Kontrakan Sakinah", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150", rating: 4, ulasan: "Lokasinya tidak bising, dekat minimarket dan tempat makan. Pokoknya pas banget!", tanggal: "15 April 2026" },
    { id: 9, nama: "Reza Pahlevi", peran: "Mahasiswa Telkom", foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150", rating: 5, ulasan: "Jarak ke kampus dekat sekali, jalan kaki cuma 5 menit. Internet ngebut buat nge-game dan tugas.", tanggal: "09 April 2026" },
    { id: 10, nama: "Maya Indah", peran: "Penghuni Kos Putri 2", foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150", rating: 5, ulasan: "Bersih banget, ada dapur bersama yang lengkap dengan kulkas dan kompor.", tanggal: "02 April 2026" },
    { id: 11, nama: "Dede Kurniawan", peran: "Penyewa Kontrakan Vista 2", foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150", rating: 4, ulasan: "Pelayanan dari admin cepat tanggap kalau ada kendala fasilitas seperti lampu mati.", tanggal: "25 Maret 2026" },
    { id: 12, nama: "Anisa Permata", peran: "Penghuni Kos Kafana", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150", rating: 5, ulasan: "Suka banget sama pencahayaan kamarnya, ada jendela besar jadi sirkulasi udara bagus.", tanggal: "19 Maret 2026" },
    { id: 13, nama: "Eko Prasetyo", peran: "Penghuni Kos Barokah", foto: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150", rating: 5, ulasan: "Harga sebanding dengan fasilitas yang didapat. Suasana tidak bising.", tanggal: "11 Maret 2026" },
    { id: 14, nama: "Fitri Handayani", peran: "Penyewa Kontrakan Sakinah", foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150", rating: 5, ulasan: "Desain bangunan modern dan bersih. Transaksi pembayaran via QRIS sangat praktis.", tanggal: "04 Maret 2026" },
    { id: 15, nama: "Gilang Ramadhan", peran: "Mahasiswa", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150", rating: 4, ulasan: "Tempat parkir luas dan aman karena dikunci kalau sudah malam.", tanggal: "26 Februari 2026" },
    { id: 16, nama: "Hani Kusuma", peran: "Penghuni Kos Exclusive", foto: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150", rating: 5, ulasan: "Kasur empuk, lemari baju luas, dan kamar mandi selalu wangi.", tanggal: "20 Februari 2026" },
    { id: 17, nama: "Irfan Hakim", peran: "Penghuni Kos Putra", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", rating: 5, ulasan: "Akses 24 jam jadi tidak pusing kalau ada keperluan mendadak pulang malam.", tanggal: "14 Februari 2026" },
    { id: 18, nama: "Jessica Tan", peran: "Penyewa Kontrakan Vista", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150", rating: 5, ulasan: "Sistem aplikasi web Kafana Vista ini membantu banget buat memantau tagihan.", tanggal: "08 Februari 2026" },
    { id: 19, nama: "Kevin Sanjaya", peran: "Penghuni Kos Kafana", foto: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150", rating: 4, ulasan: "Lingkungan bersih, tetangga kos juga saling menghargai dan tidak bising.", tanggal: "01 Februari 2026" },
    { id: 20, nama: "Lina Marlina", peran: "Penghuni Kos Putri 1", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", rating: 5, ulasan: "Ibu kos sangat responsif kalau kita butuh bantuan terkait kamar.", tanggal: "25 Januari 2026" },
    { id: 21, nama: "Muhammad Alfian", peran: "Mahasiswa / Penghuni Kos", foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150", rating: 5, ulasan: "Wi-Fi kencang tanpa lag pas dipakai meeting online maupun belajar.", tanggal: "18 Januari 2026" },
    { id: 22, nama: "Nabila Putri", peran: "Penyewa Kontrakan Sakinah", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150", rating: 5, ulasan: "Sangat puas selama tinggal di sini, fasilitas lengkap dan sesuai harapan!", tanggal: "10 Januari 2026" }
  ];

  // 2. STATE UNTUK PAGINASI (6 Item per Halaman)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimoni = daftarTestimoni.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(daftarTestimoni.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#0F0D0C] py-12 px-4 flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B48A35]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B48A35] bg-[#2A2218] px-3 py-1 rounded-full border border-[#B48A35]/30">
            TESTIMONI PENGHUNI ({daftarTestimoni.length} ULASAN)
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#FAF8F5] tracking-wide">
            Apa Kata Penghuni?
          </h2>
          <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
            Pengalaman jujur dan ulasan nyata dari para penyewa kos serta kontrakan di KAFANA VISTA.
          </p>
        </div>

        {/* Grid Card Testimoni (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTestimoni.map((item) => (
            <TestimoniCard key={item.id} testimoni={item} />
          ))}
        </div>

        {/* NUMERIC PAGINATION CONTROL */}
        <div className="flex justify-center items-center gap-2 pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 text-xs rounded border border-[#B48A35]/30 text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2A2218] transition"
          >
            ← Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1.5 text-xs rounded font-bold transition ${
                currentPage === index + 1
                  ? 'bg-[#B48A35] text-black'
                  : 'bg-[#1A1816] border border-[#382E25] text-stone-400 hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 text-xs rounded border border-[#B48A35]/30 text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2A2218] transition"
          >
            Next →
          </button>
        </div>

        {/* Tombol Kembali Ke Halaman Utama */}
        <div className="text-center pt-2">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-[#D4AF37] transition-colors"
          >
            ← Kembali ke Halaman Utama
          </Link>
        </div>

      </div>
    </div>
  );
}