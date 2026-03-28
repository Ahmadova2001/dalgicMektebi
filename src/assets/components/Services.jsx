import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Tüm Hizmetler');
  const tabs = ['Bütün xidmətlər', 'Yeni Başlayan', 'İrəli Səviyyə'];

  return (
    <div  id-="services" className="bg-blue-950 min-h-screen py-20 px-10 text-white flex flex-col items-center">
      <h2 className="text-white mt-20 font-bold text-6xl italic">KURSLARIMIZ</h2>
      <div className="flex gap-10 mt-16 border-b border-gray-600 relative">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 px-2 text-xl font-medium relative transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
            )}
          </button>
        ))}
      </div>
      <div className="mt-12 w-full max-w-5xl bg-white text-black flex flex-col md:flex-row shadow-2xl rounded-sm overflow-hidden">
        <div className="md:w-1/2 h-[400px]">
          <img src="/divinggroup.avif" className="w-full h-full object-cover" alt="Diving" />
        </div>
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">
            {activeTab === 'Tüm Hizmetler' && "Tüplü Dalışa Giriş"}
            {activeTab === 'Yeni Başlayan' && "İlk Dalış Təcrübəsi"}
            {activeTab === 'İleri Seviye' && "Dərinlikləri Kəşf Et"}
          </h3>
          <p className="text-gray-500 mb-8 border-b pb-6">
            Hizmetlerimizden birini anlatmak için bu alanı kullanın. Seçdiyiniz kursa uyğun məlumatlar burada görünəcək.
          </p>
          <div className="mb-8">
            <span className="text-gray-400 text-sm block">Başlanğıc: 2 YANVAR 2025</span>
            <span className="text-2xl font-bold">100 AZN</span>
          </div>
          <button className="bg-slate-900 text-white py-3 px-8 w-fit hover:bg-slate-800 transition-all">
            İndi yer ayır
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;