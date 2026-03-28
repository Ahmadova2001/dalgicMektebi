import React from 'react';

const Reservation = () => {
    return (
        <section id="reservation" className="bg-blue-900 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row mt-10">
                <div className="md:w-1/3 bg-yellow-400 p-10 flex flex-col justify-center text-blue-900">
                    <h2 className="text-3xl font-bold mb-4 italic">İNDİ REZERV ET!</h2>
                    <p className="font-medium">Sualtı dünyasına ilk addımını bizimlə at. Təlimatçılarımız 24 saat ərzində sizinlə əlaqə saxlayacaq.</p>
                </div>
                <div className="md:w-2/3 p-10">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Adınız və Soyadınız</label>
                                <input type="text" placeholder="Məs: Aydan Əhmədova" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Telefon nömrəniz</label>
                                <input type="tel" placeholder="+994 -- --- -- --" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Kurs Seçin</label>
                            <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Yeni Başlayanlar (Open Water)</option>
                                <option>İrəli Səviyyə (Advanced)</option>
                                <option>Professional Dalğıc</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Qeydiniz (İstəyə bağlı)</label>
                            <textarea rows="3" placeholder="Əlavə sualınız və ya qeydiniz..." className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-950 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg">
                            MÜRACİƏTİ GÖNDƏR
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Reservation;