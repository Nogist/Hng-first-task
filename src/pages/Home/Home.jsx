import React from 'react';
import './home.css';
import Main from '../../Components/Main/Main';
import Social from '../../Components/Social/Social';
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='home'>
        <Main />
        <Social />
      </div>
      <Footer />
    </div>
  )
}

export default Home