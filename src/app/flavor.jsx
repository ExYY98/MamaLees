
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios';

const Flavor = ({item}) => {
  let [clicked, setClicked] = useState(false);
  let change = function() {
    console.log('clicked')
    setClicked(!clicked);
  }
  let imageSrc = `/data/${item.ImageName}`
  return (
    <div className={styles.cardContainer} onClick={()=> {change()}}>
      <div>
        <h2>{item.Name}</h2>
        <Image src={imageSrc} alt="photo" width={300} height={300}/>
        {clicked && (
          <div className={styles.descriptionAndFlavors}>
            <div>{item.Description}</div>
            <div>{item.Ingredients}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flavor;