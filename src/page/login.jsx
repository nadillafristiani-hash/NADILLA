import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mencoba masuk dengan email: ${email}`);
    // Arahkan ke halaman dashboard setelah submit
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] w-full items-center justify-center p-4 font-sans selection:bg-slate-800 selection:text-white">
      <div className="flex w-full max-w-[1100px] min-h-[650px] bg-white rounded-md shadow-2xl overflow-hidden border border-gray-300">
        
        {/* SISI KIRI: BANNER HITAM */}
        <div className="hidden md:flex flex-1 bg-black text-white p-12 flex-col justify-between items-center relative select-none">
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop" 
              alt="Building Architecture" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="flex-grow"></div>
          <div className="relative z-10 flex flex-col items-center text-center mt-auto">
            <div className="mb-4">
              <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 20V80H35V53L55 80H68L45 49L65 20H52L35 43V20H25Z" fill="currentColor" />
                <path d="M72 20L56 50L61 57L79 25H72Z" fill="currentColor" />
                <path d="M81 60L70 77L75 80L88 60H81Z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-3xl font-light tracking-[0.2em] uppercase font-mono">KAFANA VISTA</h1>
          </div>
        </div>

        {/* SISI KANAN: FORM LOGIN */}
        <div className="flex-1 bg-white p-8 md:p-14 flex flex-col justify-between items-center text-gray-900">
          <div className="w-full max-w-[380px] mx-auto my-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">Selamat Datang di <br /> KAFANA VISTA,</h2>
              <p className="text-sm text-gray-700">Platform Kelola Properti Anda.</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-16 h-16 bg-white border-[1.5px] border-black rounded-full flex items-center justify-center text-gray-400 mb-1">
                <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold">Budi Santoso</h3>
                <p className="text-[11px] text-gray-500">Pemilik</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Alamat Email</label>
                <input 
                  type="email" 
                  placeholder="contoh@email.com" 
                  className="w-full px-4 py-2 border border-black rounded text-sm outline-none focus:ring-1 focus:ring-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Kata Sandi</label>
                <input 
                  type="password" 
                  placeholder="Masukkan Kata Sandi" 
                  className="w-full px-4 py-2 border border-black rounded text-sm outline-none focus:ring-1 focus:ring-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              {/* KUMPULAN TOMBOL */}
              <div className="space-y-2 pt-2">
                {/* 1. Tombol Masuk Utama */}
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-800 transition cursor-pointer"
                >
                  MASUK KE DASHBOARD
                </button>

                {/* 2. Tombol Cek Detail Kamar */}
                <Link 
                  to="/detail-kamar" 
                  className="block w-full text-center bg-zinc-100 text-black border border-black py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-200 transition"
                >
                  🔍 CEK DETAIL KAMAR
                </Link>

                {/* 3. TOMBOL BARU: LIHAT TESTIMONI / KATALOG */}
                <Link 
                  to="/testimoni" 
                  className="block w-full text-center bg-white text-black border border-black py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-zinc-100 transition"
                >
                  💬 LIHAT TESTIMONI
                </Link>
              </div>
            </form>

            <div className="text-center text-xs font-medium">
              <span>Belum bergabung? </span>
              <Link to="/register" className="underline font-bold hover:text-gray-600">
                Daftar Akun Baru
              </Link>
            </div>
          </div>
          
          <div className="text-center text-[10px] font-semibold text-gray-600 uppercase mt-4">
            © 2026 KAFANA VISTA. Hak Cipta Dilindungi.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;