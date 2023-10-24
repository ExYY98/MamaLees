
import React from 'react';
import styles from './page.module.css'
import NavBar from './navBar'
import Logo from '/public/data/LogoMain.png'
import Image from 'next/image'
import style from './page.module.css'

const Home = () => {
  return (
    <div>

    <div className={style.center}>
      <Image src={Logo} alt="Mama Lee's Creamery" width={400}/>
    </div>
    </div>
  );
};

export default Home;