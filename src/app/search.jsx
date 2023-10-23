
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios';

const Search = (list, searchTerm) => {
  console.log('LIST', list, searchTerm)
  if (searchTerm === '') {
    return list;
  }
  let newList = list.map((item) => {
    console.log(item);
    if (item.Name.toLowerCase().indexOf(searchTerm.toLowerCase())) {
      return item;
    }
  })
  return newList;
};

export default Search;