
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import flavorData from '/public/data/data.js';
import Image from 'next/image';
import axios from 'axios';
import Flavor from './Flavor';
import Search from './Search';

const Flavors = ({data, searchTerm, isVegan}) => {
  // let [list, setList] = useState([]);

  // useEffect(() => {
  //   setList([...data]);
  // }, [searchTerm])
  // console.log(list);
  // let list = [...data]
  let list = data;
  if (isVegan === true) {
    let veganList = list.filter((item) => {
      if (!!item.IsVegan === true) {
        return item;
      }
    })
    list = veganList
  }
  if (searchTerm !== '') {
    let tempList = list.filter((item) => {
      if (item.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    })
    list = tempList;
  }

  if(list.length === 0) {
    return (
      <div className={styles.flavors}>
        <h1>Flavors</h1>
          <div>
            {data?.map((item, i) => {
              return (
                <div className={styles.flavorCard}>
                  <Flavor key={item.ID + i} item={item} searchTerm={searchTerm}/>
                </div>
              )
            })}
          </div>
        </div>
    );
  }
  if(list.length > 0) {
    return (
      <div className={styles.flavors}>
        <h1>Flavors</h1>
          <div>
            {list?.map((item, i) => {
              return (
                <div className={styles.flavorCard}>
                  <Flavor key={item.ID + i} item={item} searchTerm={searchTerm}/>
                </div>
              )
            })}
          </div>
        </div>
    );
  }

};

export default Flavors;

  // if (searchTerm !== '' && searchTerm) {
  //   let searchedList = data.filter((item) => {
  //     if (item.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return item;
  //     }
  //   })
  //   console.log('temp', searchedList)
  //   setList([...searchedList])
  // }