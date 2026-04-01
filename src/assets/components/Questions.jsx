import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Questions = () => {
  const [aciqId, setAciqId] = useState(null);
  const dəyişdir = (id) => {
    setAciqId(aciqId === id ? null : id);
  };
  const faqs = [
    { id: 1, question: "Kurslar neçə gün çəkir?", answer: "Kurslarımız orta hesabla 3-5 gün davam edir." },
    { id: 2, question: "Avadanlıq verirsiniz?", answer: "Bəli, bütün peşəkar avadanlıqlar tərəfimizdən təmin olunur." },
    { id: 3, question: "SSS-ləri haraya əlavə edə bilərəm?", answer: "Onları istənilən səhifəyə, xüsusən də əlaqə səhifəsinə və ya ana səhifənin aşağı hissəsinə əlavə edə bilərsiniz." },
  ];

  return (
    <div className="bg-blue-950 min-h-screen py-20 px-10 text-white flex flex-col items-center font-sans">
      <div className="max-w-3xl w-full mx-auto mt-20">
        <h2 className="text-5xl font-bold mb-10 border-b border-gray-700 pb-6 text-center md:text-left"> Tez-tez Verilən Suallar</h2>
        <div className="space-y-4">
          {faqs.map((sual) => (
            <div key={sual.id} className="border border-gray-800 rounded-lg overflow-hidden transition-all bg-[#0d1735]">
              <button
                onClick={() => dəyişdir(sual.id)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#162247] transition-colors"
              >
                <span className={`text-lg font-medium ${aciqId === sual.id ? 'text-yellow-400' : 'text-white'}`}>
                  {sual.question}
                </span>
                {aciqId === sual.id ? <ChevronUp className="text-yellow-400" /> : <ChevronDown />}
              </button>
              {aciqId === sual.id && (
                <div className="px-6 pb-6 text-gray-300 border-t border-gray-800/50 pt-4">
                  <p className="leading-relaxed italic">
                    {sual.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;