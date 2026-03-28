import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-blue-950  pt-12'>
      <div className='text-white flex gap-20 justify-center'>
        <h1>Məxfilik siyasəti</h1>
        <h1>Kuki siyasəti</h1>
        <h1>Şərtlər</h1>
      </div>
      <div className='text-white flex justify-center mt-10'>© 2026, AYME Dal. Wix.com ile oluşturuldu.</div>
    </div>
    
    <button className='rounded-full flex items-center gap-2 transform hover:scale-105 active:scale-95 fixed bottom-6 right-6 bg-yellow-400 rounded-md py-3 px-6 z-40'>SÖHBƏT BAŞLA</button>
    </>
  )
}

export default Footer