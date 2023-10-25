
import React from 'react';
import styles from './page.module.css'
import NavBar from './navBar'
import Logo from '/public/data/LogoMain.png'
import Image from 'next/image'
import style from './page.module.css'

const Home = () => {
  return (
    <div className={style.center}>
      <Image src={Logo} alt="Mama Lee's Creamery" width={600}/>
    </div>
  );
};

export default Home;