
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios';

const Flavor = ({item}) => {
  let [clicked, setClicked] = useState(false);
  let change = function() {
    setClicked(!clicked);
    var elmnt = document.getElementById('content');
    elmnt.scrollIntoView({behavior: 'smooth', block:'start'});
  }
  let imageSrc = `/data/${item.ImageName}`
  return (
    <div className={styles.cardContainer} onClick={()=> {change()}}>
      <div>
        <h3>{item.Name}</h3>
        <Image src={imageSrc} alt="photo" width={250} height={250}/>
        {clicked && (
          <div className={styles.description}>
            <p>{item.Description}</p>
            <b>{item.Ingredients}</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flavor;