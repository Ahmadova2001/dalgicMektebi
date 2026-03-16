import React from 'react';
import medusa from '../medusa.avif';
import giris from '../giris.avif';
import acikdeniz from '../acikdeniz.avif';
import ireli from '../ireliseviyye.avif';
import turtle from '../turtle.avif';
import wdalogo from '../../assets/wdalogo.avif';
import isdu from '../../assets/isdu.avif';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Main = () => {
  return (
    <main>
      <section 
        className="relative h-screen w-full flex flex-col justify-center items-start px-10 md:px-24 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${medusa})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-6xl md:text-8xl font-black text-[#FFD700] uppercase leading-none">AYME <br /> DALĞIC MƏKTƏBİ</h1>
          <p className="text-2xl md:text-3xl mt-6 font-bold uppercase tracking-wide">HƏYATINIZIN MACƏRALARINA DALIŞ EDİN</p>
          <button className="mt-10 bg-white text-blue-900 font-black py-4 px-12 rounded-full text-lg hover:bg-[#87CEFA] hover:scale-105 transition-all duration-300 shadow-xl uppercase">
            REZERV EDİN
          </button>
        </div>
      </section>
      <section className="py-20 bg-[#122241] text-white flex flex-col justify-center items-center font-montserrat">
        <div className="text-center px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#facc15] italic uppercase mb-6 tracking-tighter">HAQQIMIZDA</h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed italic opacity-90 mb-8">
            "AYME Dalğıc məktəbi olaraq, sadəcə dalış öyrətmirik; biz sizi suyun altındakı o sehrli və sakit dünyaya dəvət edirik. İllərin təcrübəsi və peşəkar təlimçilərimizlə, təhlükəsizliyi ön planda tutaraq hər bir dalışı unudulmaz bir macəraya çeviririk."
          </p>
          <button className="bg-white text-[#122241] font-black py-3 px-10 rounded-full text-md shadow-2xl hover:bg-[#87CEFA] transition-all duration-300 uppercase">DAHA ÇOX</button>
        </div>
      </section>
      <section className='bg-blue-950 py-20'>
        <h2 className='text-white font-medium italic text-center text-3xl mb-12'>KURSLARIMIZ</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="relative h-[700px] overflow-hidden group cursor-pointer">
            <img src={giris} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tüplə Dalış" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
            <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
              <h3 className="text-3xl font-bold mb-10">TÜPLƏ DALIŞ</h3>
              <p className="mb-10 opacity-90 text-lg">Dalış dünyasına ilk addımınızı atın!</p>
              <button className="bg-white text-black font-bold py-3 px-10 rounded-full w-fit hover:bg-[#87CEFA] transition-colors">Yer Ayır</button>
            </div>
          </div>
          <div className="relative h-[700px] overflow-hidden group cursor-pointer">
            <img src={acikdeniz} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Açıq Dəniz" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
            <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
              <h3 className="text-3xl font-bold mb-4">AÇIQ DƏNİZ DALIŞI</h3>
              <p className="mb-8 opacity-90 text-lg">Mavi suların dərinliklərinə doğru səyahətə başlayın.</p>
              <button className="bg-white text-black font-bold py-3 px-10 rounded-full w-fit hover:bg-[#87CEFA] transition-colors">Yer Ayır</button>
            </div>
          </div>
          <div className="relative h-[700px] overflow-hidden group cursor-pointer">
            <img src={ireli} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Profesional" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
            <div className="relative h-full flex flex-col justify-end p-10 text-white z-10">
              <h3 className="text-3xl font-bold mb-4">PROFESIONAL DALIŞ</h3>
              <p className="mb-8 opacity-90 text-lg">Təcrübənizi artırın və limitlərinizi genişləndirin.</p>
              <button className="bg-white text-black font-bold py-3 px-10 rounded-full w-fit hover:bg-[#87CEFA] transition-colors">Yer Ayır</button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${turtle})` }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className='relative z-10 text-yellow-300 text-3xl italic font-bold text-center px-4'>HƏRƏKƏTƏ KEÇİN, OKEANI TƏMİZLƏMƏYƏ BAŞLAYAQ</h2>
        <button className='relative z-10 rounded-full py-3 px-10 mt-10 bg-white text-black font-bold hover:bg-[#87CEFA] transition-colors'>YATIRIM ET</button>
      </section>
      <section className='bg-blue-950 py-20'>
        <h2 className='text-yellow-300 italic text-center text-5xl mb-20'>SERTİFİKATLARIMIZ</h2>
        <div className='container mx-auto flex justify-center gap-20 text-4xl mb-20'>
          <img src={wdalogo} alt="WDA" className='w-40' />
          <img src={isdu} alt="ISDU" className='w-40' />
        </div>
      </section>

      <section className="bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#122241] mb-8">Bizimlə Əlaqə</h2>
            <p className="text-gray-600 mb-4">Div Academy / Əhməd Rəcəbli</p>
            <p className="text-gray-600">(212) 111 11 11</p>
            <div className="flex space-x-4 mt-8 text-2xl text-[#122241]">
              <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Ad" className="border-b border-gray-400 outline-none pb-2 w-full" />
              <input type="text" placeholder="Soyad" className="border-b border-gray-400 outline-none pb-2 w-full" />
            </div>
            <input type="email" placeholder="E-post *" className="border-b border-gray-400 outline-none pb-2 w-full" />
            <textarea placeholder="Mesaj..." className="border-b border-gray-400 outline-none pb-2 w-full h-24"></textarea>
            <button className="bg-[#122241] text-white py-3 px-12 hover:bg-opacity-90 transition w-full">Göndər</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;