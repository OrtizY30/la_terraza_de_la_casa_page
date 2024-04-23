import { useState } from 'react'
import logo from '/img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [open, setOpen] = useState(false)
  return (
    <header className=' fixed z-10 top-0 px-5 p-3 flex gap-8 items-center justify-between md:justify-start w-full bg-neutral-800/90 shadow-2xl shadow-black/70 md:bg-black/60 md:h-16
    backdrop-blur-sm  rounded-b-3xl'>
        <div className='w-16 md:w-1/4'>
            <img src={logo} width={80} alt="" />
        </div>

        <div className='hidden md:block' >
            <ul className='flex '>
                <li>
                    <Link to="/" className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'>Início</Link>
                </li>
                <li>
                    <Link to="quienes-somos" className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'>¿Quienes somos?</Link>
                </li>
                <li>
                    <Link to="/" className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'>Menú</Link>
                </li>
                <li>
                    <Link to="#" className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'>Tiendas</Link>
                </li>
                <li>
                    <Link to="#" className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'>Favoritos</Link>
                </li>
            </ul>
        </div>

        <div 
        className={`md:hidden cursor-pointer hover:bg-orange-300/30 rounded-full  w-14 h-14 flex items-center justify-center `}
        onClick={()=> setOpen(true)}
        >
        <box-icon name='menu' color="#FB923C" size='md'></box-icon>
       
        </div>
        

        <div className={`absolute ${open ? 'top-0 h-screen' : '-top-96 h-full' } transition-all duration-1000 ease-in-out  left-0 bg-black/40  w-full  `}
       
        >
            <div className='bg-orange-200 p-10 relative shadow-2xl shadow-black/75 rounded-b-3xl'>

         
        <div 
        className={`absolute right-2 top-2 md:hidden cursor-pointer hover:bg-orange-300/80 rounded-full w-14 h-14 flex items-center justify-center  `}
        onClick={()=> setOpen(false)}
        >
        <box-icon name='x'  color="#FB923C" size='lg'></box-icon>
       
        </div>
        <ul className='flex flex-col items-center h-72 justify-between   '>
                <li>
                    <Link to="/" 
                    className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'
                    onClick={()=> setOpen(false)}
                    >Início</Link>
                </li>
                <li>
                    <Link to="/quienes-somos" 
                    className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'
                     onClick={()=> setOpen(false)}
                    >¿Quienes somos?</Link>
                </li>
                <li>
                    <Link to="/" 
                    className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'
                    onClick={()=> setOpen(false)}
                    >Menú</Link>
                </li>
                <li>
                    <Link to="#" 
                    className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'
                    onClick={()=> setOpen(false)}
                    >Tiendas</Link>
                </li>
                <li>
                    <Link to="#" 
                    className='text-2xl text-orange-400 font-black mx-5 hover:text-orange-800 transition-all ease-in-out duration-300'
                    onClick={()=> setOpen(false)}
                    >Favoritos</Link>
                </li>
            </ul>
            </div>
        </div>

    </header>
  )
}

export default Header