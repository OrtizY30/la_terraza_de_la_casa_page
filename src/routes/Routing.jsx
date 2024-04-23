import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import QuienesSomos from '../page/QuienesSomos'
import Home from '../page/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>} />
        <Route path='quienes-somos' element={<QuienesSomos/>}/>
        </Route>

    </Routes>
  )
}

export default Routing