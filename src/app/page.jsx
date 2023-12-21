"use client";
import styles from './page.module.css';
import Home from './home'
import NavBar from './navBar'
import {useState, useEffect} from 'react'
import Flavors from './flavors'
import ContactUs from './contactUs'
import Image from 'next/image'
import MiniLogo from '/public/data/Stamp.png'
import axios from 'axios'
import style from './page.module.css'
import Search from './search'

export default function Page() {
  const [active, setActive] = useState('home');
  const [data, setData] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  let [isVegan, setIsVegan] = useState(false);
  let [isTea, setIsTea] = useState(false);
  useEffect(() => {
    axios.get('api/getData')
    .then((results) => {
      setData(results.data.data);
    })
    .catch((error) => {
      console.log("ERROR!!!", error)
    })
  }, [active]);
  console.log(isVegan);
  return (
    <div className={style.homePage}>
      <div className={style.navBar}>
        <div onClick={() => {setActive('home')}}>
        <Image src={MiniLogo} alt="mini logo" className={styles.logo}/>
        </div>
        <NavBar setActive={setActive}/>
      </div>
      <div>
        {active === 'home' && (
          <Home />
        )}
        {active === 'flavors' && (
          <div>
           <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} isVegan={isVegan} setIsVegan={setIsVegan} isTea={isTea} setIsTea={setIsTea}/>
            <div>
              <Flavors data={data} searchTerm={searchTerm} isVegan={isVegan}/>
            </div>
          </div>
        )}
        {active === 'contactUs' && (
          <ContactUs />
        )}
      </div>
    </div>
  )
}


