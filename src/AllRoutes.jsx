import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import PricesPage from './Pages/PricesPage'
import Trade from './Pages/Trade'
import Wallet from './Pages/Wallet'
import NotFound from './Pages/NotFound'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<About/>} path='/About' />
            <Route element={<PricesPage/>} path='/Prices' />
            <Route element={<Trade/>} path='/Trade' />
            <Route element={<Wallet/>} path='/Wallet' />
            <Route element={<NotFound/>} path='*' />
        </Routes>
    </div>
  )
}

export default AllRoutes