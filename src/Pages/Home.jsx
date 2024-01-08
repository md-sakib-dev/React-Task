import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Recomended from '../components/Recomended'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Recomended/>
        <Footer/>

    </div>
  )
}

export default Home