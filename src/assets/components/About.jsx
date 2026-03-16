import React from 'react'
import { Link } from 'react-router-dom'



const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kerem Deniz",
      role: "Təlimçi",
      image: "/kerem.avif",
      description:"Kerem Deniz, 20 illik dalğıc təcrübəsi ilə dənizin sirlərini sizinlə bölüşür. Təhlükəsizliyi və peşəkarlığı əsas tutan Kerem, su altı dünyasını kəşf etmək istəyənlər üçün ideal bələdçidir. Dalış onun üçün sadəcə iş deyil, bir yaşam tərzidir."
    },
    {
      id: 2,
      name: "Tarık Mert",
      role: "İdarəçi",
      image: "/tarik.avif",
      description: "Tarık Mert, dalış mərkəzimizin həm idarəçisi, həm də təcrübəli baş təlimçisidir. O, su altındakı texniki bilikləri ilə təhlükəsizliyi idarəçilik bacarığı ilə birləşdirir. Tarıkın əsas hədəfi, hər kəsin dənizin altındakı o sehrli dünyanı ən yüksək standartlarla kəşf etməsidir."
    },
    {
      id: 3,
      name: "Müge Serin",
      role: "Təlimçi",
      image: "/muge.avif",
      description: "Müge Serin, su altı dünyasına olan sevgisini tələbələri ilə bölüşən enerjili bir təlimçidir. Səbirli yanaşması və təcrübəsi ilə xüsusilə yeni başlayanlara dalış qorxularını yenməkdə kömək edir. Müge üçün suyun altı, kəşf olunmağı gözləyən unikal bir dinclik mənbəyidir."
    }
  ];
  return (
    <div className="bg-blue-950 min-h-screen py-20 px-10 text-white flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-black mb-2">Haqqımızda</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6 text-center">Okean bizim yaşam tərzimizdir.</h2>
      <p className="max-w-xl text-center text-lg md:text-2 leading-relaxed mt-4">
        Dərinliklərin sirli dünyası, bizim üçün sadəcə bir məkan deyil, əsl bir tutkudur. Hər dalışımızda maviliyin sonsuzluğuna qovuşur, suyun altındakı o əsrarəngiz sakitliyi və kəşf edilməmiş gözəllikləri ruhumuzda hiss edirik. Biz təbiətlə vəhdət yaradaraq, hər kəsin bu unikal təcrübəni yaşaması üçün çalışırıq. Çünki suyun altında keçən hər an, həyatın özünü daha dərindən anlamaqdır.
        Okyanus, bəşəriyyətin gələcəyi və ekosistemin təməlidir. Biz "Mora Dalış Okulu" olaraq, insanların su altı dünyası ilə aralarındakı o kopmuş bağı yenidən bərpa etmələrinə kömək edirik. Dalış fəaliyyətlərimizdə sadəcə bir idman növünü deyil, həm də dənizlərimizin mühafizəsi və ekoloji şüurun artırılması missiyasını daşıyırıq.
        Peşəkar təlimçilərimizlə birlikdə, həm yeni başlayanlar, həm də təcrübəli dalğıclar üçün təhlükəsiz və unudulmaz təcrübələr təqdim edirik. Suyun altındakı hər bir nəfəs, sizə dünyanı tamamilə fərqli bir perspektivdən görmə imkanı tanıyır. Bizim üçün dalış, həyatın ritmini dərindən hiss etmək və təbiətin ən gizli xəzinələrinə şahidlik etməkdir. Gəlin, bu maviliyi birlikdə kəşf edək.
        Mora Dalış Okulu olaraq hədəfimiz, təhlükəsizlik qaydalarına ciddi riayət edərək, hər kəsi su altı dünyasının sehrli qapısından içəri dəvət etməkdir. Sizi sadəcə bir kursa deyil, böyük bir ailənin üzvü olmağa və dalışın verdiyi o xüsusi azadlıq hissini bizimlə bölüşməyə dəvət edirik. Unutmayın ki, suyun altında keçən hər bir dəqiqə, həyatınıza qatdığınız yeni və maraqlı bir hekayədir.
      </p>
      <div className=''>
        <h2 className='flex justify-center text-yellow-400 text-2xl italic mt-20'>KOMANDAMIZLA TANIŞ OLUN</h2>
        <p className='max-w-s text-center text-lg md:text-2 leading-relaxed mt-5'>Dənizin dərinliklərində təhlükəsiz və unudulmaz təcrübə yaşatmaq üçün çalışan komandamız, öz sahəsində peşəkar, dəniz vurğunu və təcrübəli təlimçilərdən ibarətdir. Bizim üçün hər bir tələbə sadəcə bir müştəri deyil, su altı dünyasının yeni kəşfçisidir.
          Beynəlxalq sertifikatlara malik təlimçilərimiz, dalışın bütün incəliklərini sizə öyrətmək və ilk nəfəsinizdən son dalışınıza qədər yanınızda olmaq üçün böyük bir həvəslə çalışırlar. Bizim komandamızda təhlükəsizlik, professional yanaşma və dostyana mühit həmişə ön plandadır. Gəlin, bu macəranı birlikdə yaşayaq!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6">

        {teamMembers.map((member) => (
          <div key={member.id} className="bg-blue-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full border-4 border-yellow-400 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-yellow-400">{member.name}</h3>
            <p className="text-lg text-white font-semibold mb-4">{member.role}</p>
            <p className="text-gray-200 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About