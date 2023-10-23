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
  const [active, setActive] = useState('flavors');
  const [data, setData] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get('api/getData')
    .then((results) => {
      setData(results.data.data);
    })
    .catch((error) => {
      console.log("ERROR!!!", error)
    })
  }, [active]);

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
          <div>
            <div className={styles.searchBar}>
              <form className={styles.test}>
                <input type='text' placeholder='search' value={searchTerm} onChange={(event) => {
                  console.log(searchTerm)
                  setSearchTerm(event.target.value)}}></input>
              </form>
            </div>
            <div>
              <Flavors data={data} searchTerm={searchTerm}/>
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


