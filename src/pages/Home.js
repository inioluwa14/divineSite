import { CssBaseline } from '@mui/material'
import React from 'react'
import Hero from '../assets/mitech-landing-main-slider-bg.webp'
import Navbar from '../components/Navbar';
import Header from '../layout/Header';
// import CardHero from '../components/CardHero';
import SectionOne from '../layout/SectionOne';
import SectionTwo from '../layout/SectionTwo';
import SectionThree from '../layout/SectionThree';
import SectionFour from '../layout/SectionFour';
import Footer from '../components/Footer';

const styles = {
  hero:{
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '100vh', // Ensures the section covers the entire viewport height
    color: 'white', // Change text color as needed
    // border:'2px solid green'
  },
  box:{

  }
}

function Home() {
  return (
    <>
    <div style={styles.hero}>
      <CssBaseline />
      <Navbar/>
      <Header/>
  </div>
  <SectionTwo/>
  <SectionOne/>

  <SectionThree/>
  <SectionFour/>
  <Footer/>
  </>
  )
}

export default Home