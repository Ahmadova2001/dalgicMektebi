import React from 'react'
import fish1 from '../fish1.jpg'
import fish2 from '../fish2.jpg'
import fish3 from '../fish3.jpg'
import fish4 from '../fish4.jpg'
import divingcouple from '../divingcouple.jpg'



const Places = () => {
  return (
    <>
      <div className="bg-blue-950 min-h-screen py-20 px-10 text-white flex flex-col items-center" >
        <h2 className='text-2xl italic font-bold text-amber-300 mt-20'>DALIŞ BÖLGƏLƏRİ</h2>
        <p className='text-xl font-bold text-yellow-300 mt-30'>Akvarium Körfəzi</p>
        <p className='font-bold'>Dərinlik: 8-25 m  |  Axıntı: Orta Şiddətli  |  Yeni Başlayanlara Uyğun</p>
        <div className='flex gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
          <img src={fish1} alt="" className='w-100 h-100' />
          <img src={fish2} alt="" className='w-100 h-90' />
          <img src={fish3} alt="" className='w-90 h-100' />
          <video
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls
          >
            <source src="/diving2.mp4" type="video/mp4" />
            Brauzeriniz video formatını dəstəkləmir.
          </video>
          <img src={fish4} alt="" className='w-100 h-150' />
          <video
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls
          >
            <source src="/diving3.mp4" type="video/mp4" />
            Brauzeriniz video formatını dəstəkləmir.
          </video>
          <video
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls
          >
            <source src="/diving4.mp4" type="video/mp4" />
            Brauzeriniz video formatını dəstəkləmir.
          </video>
          <img src={divingcouple} alt="" />
          <video
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls
          >
            <source src="/happydolphin.mp4" type="video/mp4" />
            Brauzeriniz video formatını dəstəkləmir.
          </video>

        </div>
      </div>



    </>
  )
}

export default Places