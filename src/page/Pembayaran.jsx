import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Pembayaran() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Ambil data kamar dari Halaman Detail Kamar
  const itemKamar = location.state?.itemTransaksi || null;

  // State Pilihan Metode Pembayaran
  const [metode, setMetode] = useState('bca');
  const [copied, setCopied] = useState(false);

  if (!itemKamar) {
    return (
      <div className="min-h-screen bg-[#1A1613] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="bg-[#14110F] p-8 border border-[#8C6943]/30 max-w-md w-full">
          <p className="text-stone-400 text-xs mb-6">Tidak ada data transaksi. Silakan pilih kamar terlebih dahulu.</p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#B48A35] text-[#1A1613] font-bold py-2.5 uppercase text-xs tracking-widest hover:bg-[#9a7527]"
          >
            Cari Kamar
          </button>
        </div>
      </div>
    );
  }

  // DAFTAR METODE PEMBAYARAN LENGKAP
  const daftarMetode = [
    // CATEGORY: TRANSFER BANK
    { id: 'bca', jenis: 'bank', label: 'Bank BCA', bank: 'BCA', noRek: '8830-1928-37', nama: 'Sakinah Kos & Kontrakan' },
    { id: 'mandiri', jenis: 'bank', label: 'Bank Mandiri', bank: 'Mandiri', noRek: '1370-0192-8371', nama: 'Sakinah Kos & Kontrakan' },
    { id: 'bri', jenis: 'bank', label: 'Bank BRI', bank: 'BRI', noRek: '0021-0100-2938-501', nama: 'Sakinah Kos & Kontrakan' },
    { id: 'bni', jenis: 'bank', label: 'Bank BNI', bank: 'BNI', noRek: '0839-2019-38', nama: 'Sakinah Kos & Kontrakan' },
    { id: 'cimb', jenis: 'bank', label: 'Bank CIMB Niaga', bank: 'CIMB Niaga', noRek: '7029-3810-49', nama: 'Sakinah Kos & Kontrakan' },
    { id: 'bsi', jenis: 'bank', label: 'Bank Syariah (BSI)', bank: 'BSI', noRek: '7192-8301-92', nama: 'Sakinah Kos & Kontrakan' },

    // CATEGORY: QRIS & E-WALLET
    { id: 'qris_gopay', jenis: 'qris', label: 'QRIS (GoPay)', provider: 'GoPay', qrCode: 'SakinahKosGoPay' },
    { id: 'qris_ovo', jenis: 'qris', label: 'QRIS (OVO)', provider: 'OVO', qrCode: 'SakinahKosOVO' },
    { id: 'qris_shopee', jenis: 'qris', label: 'QRIS (ShopeePay)', provider: 'ShopeePay', qrCode: 'SakinahKosShopee' },
    { id: 'qris_dana', jenis: 'qris', label: 'QRIS (DANA)', provider: 'DANA', qrCode: 'SakinahKosDANA' },

    // CATEGORY: MINIMARKET / TUNAI
    { id: 'indomaret', jenis: 'retail', label: 'Indomaret / Ceriamart', kodeBayar: '8820-9182-3719', nama: 'Sakinah Kos' },
    { id: 'alfamart', jenis: 'retail', label: 'Alfamart / Alfamidi', kodeBayar: '1092-8371-9283', nama: 'Sakinah Kos' },
    { id: 'tunai', jenis: 'tunai', label: 'Tunai di Lokasi (Check-in)', info: 'Bayar langsung ke pengelola saat serah terima kunci' }
  ];

  // Ambil Data Metode Aktif
  const metodeAktif = daftarMetode.find(item => item.id === metode);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // PROSES SIMPAN TRANSAKSI
  const handleKonfirmasiPembayaran = () => {
    const listLama = JSON.parse(localStorage.getItem('user_transaksi')) || [];
    const idBaru = `TRX-${Date.now().toString().slice(-8)}`;
    const hariIni = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    const transaksiBaru = {
      id: idBaru,
      tanggalTransaksi: hariIni,
      namaProperti: itemKamar.namaProperti,
      tipeKamar: itemKamar.tipeKamar,
      durasiSewa: itemKamar.durasiSewa,
      tanggalMasuk: itemKamar.tanggalMasuk,
      hargaSewa: itemKamar.hargaSewa,
      biayaLayanan: itemKamar.biayaLayanan,
      deposit: itemKamar.deposit,
      totalBayar: itemKamar.totalBayar,
      metodePembayaran: metodeAktif.label,
      status: 'Lunas',
      gambar: itemKamar.gambar
    };

    const listTerbaru = [transaksiBaru, ...listLama];
    localStorage.setItem('user_transaksi', JSON.stringify(listTerbaru));

    alert(`Pembayaran Berhasil via ${metodeAktif.label}!\nStatus transaksi telah LUNAS.`);
    navigate('/riwayat-transaksi');
  };

  return (
    <div className="min-h-screen bg-[#1A1613] text-white font-sans antialiased py-10 px-6">
      
      {/* HEADER PAGE */}
      <div className="max-w-5xl mx-auto mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="text-stone-400 text-xs hover:text-[#B48A35] transition-all mb-4 block"
        >
          ← Kembali ke Detail Kamar
        </button>
        <h1 className="text-3xl font-serif tracking-wide text-stone-100">Konfirmasi Pembayaran</h1>
        <p className="text-xs text-stone-400 mt-1">Selesaikan pembayaran untuk mengamankan kamar pesanan Anda.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* KOLOM KIRI: METODE BANYAK & PETUNJUK */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* STEP 1: PILIH METODE PEMBAYARAN */}
          <div className="bg-[#14110F] border border-[#8C6943]/30 p-6 space-y-6">
            <h2 className="text-xs font-serif text-[#B48A35] uppercase font-bold tracking-widest">
              1. PILIH METODE PEMBAYARAN
            </h2>

            {/* SUB-SECTION: TRANSFER BANK */}
            <div className="space-y-2">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold block">Transfer Virtual Account / Bank:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {daftarMetode.filter(m => m.jenis === 'bank').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setMetode(item.id)}
                    className={`p-3 border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      metode === item.id 
                        ? 'border-[#B48A35] bg-[#B48A35]/15 text-white font-bold' 
                        : 'border-[#8C6943]/20 bg-[#1A1613] text-stone-400 hover:border-[#8C6943]/50'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full border border-[#B48A35] flex items-center justify-center ${metode === item.id ? 'bg-[#B48A35]' : ''}`}></span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SUB-SECTION: QRIS & E-WALLET */}
            <div className="space-y-2 pt-2 border-t border-[#8C6943]/20">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold block">QRIS &amp; E-Wallet:</span>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {daftarMetode.filter(m => m.jenis === 'qris').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setMetode(item.id)}
                    className={`p-3 border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      metode === item.id 
                        ? 'border-[#B48A35] bg-[#B48A35]/15 text-white font-bold' 
                        : 'border-[#8C6943]/20 bg-[#1A1613] text-stone-400 hover:border-[#8C6943]/50'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full border border-[#B48A35] flex items-center justify-center ${metode === item.id ? 'bg-[#B48A35]' : ''}`}></span>
                    📱 {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SUB-SECTION: MINIMARKET & TUNAI */}
            <div className="space-y-2 pt-2 border-t border-[#8C6943]/20">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider font-semibold block">Lainnya:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {daftarMetode.filter(m => m.jenis === 'retail' || m.jenis === 'tunai').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setMetode(item.id)}
                    className={`p-3 border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      metode === item.id 
                        ? 'border-[#B48A35] bg-[#B48A35]/15 text-white font-bold' 
                        : 'border-[#8C6943]/20 bg-[#1A1613] text-stone-400 hover:border-[#8C6943]/50'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full border border-[#B48A35] flex items-center justify-center ${metode === item.id ? 'bg-[#B48A35]' : ''}`}></span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* STEP 2: PETUNJUK PEMBAYARAN SESUAI PILIHAN */}
          <div className="bg-[#14110F] border border-[#8C6943]/30 p-6 space-y-4">
            <h2 className="text-xs font-serif text-[#B48A35] uppercase font-bold tracking-widest">
              2. PETUNJUK PEMBAYARAN ({metodeAktif.label.toUpperCase()})
            </h2>

            {/* TAMPILAN JIKA METODE = BANK */}
            {metodeAktif.jenis === 'bank' && (
              <div className="bg-[#1A1613] p-4 border border-[#8C6943]/20 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Bank / Penyedia:</span>
                  <span className="font-bold text-stone-200">{metodeAktif.bank}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Atas Nama:</span>
                  <span className="font-semibold text-stone-200">{metodeAktif.nama}</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-[#8C6943]/20">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Nomor Rekening / VA:</span>
                    <span className="text-base font-mono font-bold text-[#B48A35]">{metodeAktif.noRek}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(metodeAktif.noRek.replace(/-/g, ''))}
                    className="bg-[#B48A35]/20 border border-[#B48A35] text-[#B48A35] text-[10px] px-3 py-1 uppercase tracking-wider font-bold hover:bg-[#B48A35] hover:text-[#1A1613] transition-all cursor-pointer"
                  >
                    {copied ? 'Tersalin!' : 'Salin Rekening'}
                  </button>
                </div>
              </div>
            )}

            {/* TAMPILAN JIKA METODE = QRIS */}
            {metodeAktif.jenis === 'qris' && (
              <div className="text-center space-y-3 p-5 bg-[#1A1613] border border-[#8C6943]/20">
                <p className="text-xs text-[#B48A35] font-bold">Scan Kode QRIS di Bawah Ini via Aplikasi {metodeAktif.provider}:</p>
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${metodeAktif.qrCode}`} 
                  alt="QRIS Code" 
                  className="mx-auto border-4 border-white shadow-md"
                />
                <p className="text-[11px] text-stone-400">Buka aplikasi {metodeAktif.provider}, pilih fitur Scan/QRIS, lalu lakukan pembayaran sesuai total tagihan.</p>
              </div>
            )}

            {/* TAMPILAN JIKA METODE = RETAIL */}
            {metodeAktif.jenis === 'retail' && (
              <div className="bg-[#1A1613] p-4 border border-[#8C6943]/20 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Merchant / Gerai:</span>
                  <span className="font-bold text-stone-200">{metodeAktif.label}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#8C6943]/20">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Kode Pembayaran:</span>
                    <span className="text-base font-mono font-bold text-[#B48A35]">{metodeAktif.kodeBayar}</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(metodeAktif.kodeBayar.replace(/-/g, ''))}
                    className="bg-[#B48A35]/20 border border-[#B48A35] text-[#B48A35] text-[10px] px-3 py-1 uppercase font-bold hover:bg-[#B48A35] hover:text-[#1A1613]"
                  >
                    {copied ? 'Tersalin!' : 'Salin Kode'}
                  </button>
                </div>
                <p className="text-[10px] text-stone-400 pt-1">Tunjukkan kode pembayaran ini ke kasir {metodeAktif.label}.</p>
              </div>
            )}

            {/* TAMPILAN JIKA METODE = TUNAI */}
            {metodeAktif.jenis === 'tunai' && (
              <div className="bg-[#1A1613] p-4 border border-[#8C6943]/20 text-xs space-y-2">
                <span className="text-[#B48A35] font-bold block">Bayar Langsung Saat Check-in</span>
                <p className="text-stone-300">{metodeAktif.info}</p>
              </div>
            )}

            {/* FORM UPLOAD BUKTI TRANSFER */}
            <div className="pt-2">
              <label className="text-xs text-stone-400 block mb-2">Upload Bukti Transfer (Opsional):</label>
              <input 
                type="file" 
                className="w-full text-xs text-stone-400 bg-[#1A1613] border border-[#8C6943]/30 p-2 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-xs file:bg-[#B48A35] file:text-[#1A1613] file:font-bold file:cursor-pointer"
              />
            </div>

          </div>

        </div>

        {/* KOLOM KANAN: RINGKASAN PESANAN & TOMBOL KONFIRMASI */}
        <div className="lg:col-span-1">
          <div className="bg-[#14110F] border border-[#8C6943]/40 p-6 sticky top-6 shadow-2xl space-y-6">
            
            <h3 className="text-xs font-serif text-[#B48A35] uppercase font-bold tracking-wider pb-2 border-b border-[#8C6943]/20">
              Ringkasan Pesanan
            </h3>

            {/* KARTU GAMBAR & NAMA PROPERTI */}
            <div className="space-y-3">
              <img src={itemKamar.gambar} alt={itemKamar.namaProperti} className="w-full h-32 object-cover border border-[#8C6943]/20" />
              <div>
                <h4 className="text-base font-serif text-stone-100">{itemKamar.namaProperti}</h4>
                <p className="text-xs text-[#B48A35] font-semibold">{itemKamar.tipeKamar}</p>
              </div>
            </div>

            {/* RINCIAN HARGA */}
            <div className="bg-[#1A1613] p-4 border border-[#8C6943]/20 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Durasi Sewa:</span>
                <span className="font-semibold text-stone-200">{itemKamar.durasiSewa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Tanggal Masuk:</span>
                <span className="font-semibold text-stone-200">{itemKamar.tanggalMasuk}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Harga Sewa:</span>
                <span className="font-semibold text-stone-200">{itemKamar.hargaSewa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Biaya Layanan:</span>
                <span className="font-semibold text-stone-200">{itemKamar.biayaLayanan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Deposit:</span>
                <span className="font-semibold text-stone-200">{itemKamar.deposit}</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#8C6943]/30 font-bold text-sm text-[#B48A35]">
                <span>Total Tagihan:</span>
                <span>{itemKamar.totalBayar}</span>
              </div>
            </div>

            {/* TOMBOL BAYAR */}
            <button 
              onClick={handleKonfirmasiPembayaran}
              className="w-full bg-[#B48A35] text-[#1A1613] font-bold py-3 text-xs tracking-widest uppercase hover:bg-[#9a7527] transition-all shadow-md cursor-pointer"
            >
              KONFIRMASI &amp; SAYA SUDAH BAYAR
            </button>

            <p className="text-[10px] text-center text-stone-500">
              *Setelah mengonfirmasi, transaksi akan langsung tercatat LUNAS di halaman Riwayat Transaksi Anda.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}