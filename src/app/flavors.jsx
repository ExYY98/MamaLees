
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import flavorData from '/public/data/data.js';
import Image from 'next/image';
import axios from 'axios';
import Flavor from './Flavor';


const Flavors = () => {
  const [data, setData ] = useState([]);
  useEffect(() => {
    axios.get('api/getData')
    .then((results) => {
      console.log('HERE IT IS', results.data.data);
      setData(results.data.data);
    })
    .catch((error) => {
      console.log("ERROR!!!", error)
    })
  }, [])

  return (
    <div className={styles.flavors}>
      <h1>Flavors</h1>
      <div>
        {data?.map((item, i) => {
          let imageSrc = `/data/${item.ImageName}`
          return (
            <Flavor key={item.ID + i} item={item}/>
            // <div className={styles.flavorCard} key={item.ID + i}>
            //   <div>
            //   <h2>{item.Name}</h2>
            //     <Image src={imageSrc} alt="photo" width={300} height={300}/>
            //   </div>
            // </div>
          )
        })}
      </div>
    </div>
  );
};

export default Flavors;