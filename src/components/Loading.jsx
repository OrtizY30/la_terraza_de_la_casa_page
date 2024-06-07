import React from 'react'
import logo from '/img/logo.webp'

const Loading = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center w-full bg-customDark'>
      <div className='space-y-4'>
        <img src={logo} width={200} alt="logo la terraza de la casa" className='imgFotter' />

        <p className='text-white text-2xl text-center font-black tracking-widest animate-pulse '>Cargando ...</p>
      </div>
      
    </div>
  )
}

export default Loading