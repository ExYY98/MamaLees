
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios';

const Flavor = ({item}) => {
  let imageSrc = `/data/${item.ImageName}`
  return (
    <div className={styles.flavorCard}>
      <div>
      <h2>{item.Name}</h2>
        <Image src={imageSrc} alt="photo" width={300} height={300}/>
      </div>
    </div>
  );
};

export default Flavor;