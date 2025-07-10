import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Discover from './components/Discover'
import TopSales from './components/TopSales'
import Stat from './components/Stat'
import AllProduct from './components/AllProduct'
import Comment from './components/Comment'
import NewProduct from './components/NewProduct'
import Features from './components/Features'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function page() {
  return (
    <div className=' w-full overflow-x-hidden h-dvh   ' >
      <Header/>
      <Nav/>
      <Hero/>
      <Discover/>
      <TopSales/>
      <Stat/>
      <AllProduct/>
      <Comment/>
      <NewProduct/>
      <Features/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default page