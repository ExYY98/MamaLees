
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
  searchTerm = searchTerm.toLowerCase();
  if (searchTerm === 'vegan'){
    console.log('vegan');
    let newList = list.map((item) => {
      if (item.isVegan === 1) {
        return item
      }
    })
  }
  let newList = list.map((item) => {
    if (item.Name.toLowerCase().indexOf(searchTerm)) {
      return item;
    }
  })
  return newList;
};

export default Search;