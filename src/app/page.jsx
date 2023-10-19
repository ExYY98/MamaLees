"use client";
import styles from './page.module.css';
import Home from './home'
import NavBar from './navBar'
import {useState, useEffect} from 'react'
import Flavors from './flavors'
import ContactUs from './contactUs'
import Image from 'next/image'
import MiniLogo from '/public/data/MiniLogo.png'
import axios from 'axios'
import style from './page.module.css'

export default function Page() {
  const [active, setActive] = useState('home');
  const [data, setData] = useState([]);

  useEffect(() => {

  }, [active])

  return (
    <div className={style.homePage}>
      <div className={style.navBar}>
        <Image src={MiniLogo} alt="mini logo" className={style.logo}/>
        <NavBar setActive={setActive}/>
      </div>
      <div>
        {active === 'home' && (
          <Home />
        )}
        {active === 'flavors' && (
          <Flavors />
        )}
        {active === 'contactUs' && (
          <ContactUs />
        )}
      </div>
    </div>
  )
}


