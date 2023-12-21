
import React from 'react';
import styles from './page.module.css'
import NavBar from './navBar'
import Logo from '/public/data/FrogLogo.png'
import Image from 'next/image'
import style from './page.module.css'

const Home = () => {
  return (
    <div className={style.center}>
      <div>
        <Image src={Logo} alt="Mama Lee's Creamery" width={400}/>
      </div>
      <div className={style.title}>
        <h1>Mama Lee's Creamery</h1>
      </div>
    </div>
  );
};

export default Home;