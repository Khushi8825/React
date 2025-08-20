import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from './components/header/Header_h'
import  Footer  from './components/footer/Footer'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout