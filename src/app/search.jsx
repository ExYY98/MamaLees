
import React from 'react'
import styles from './page.module.css';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios';

const Search = ({setSearchTerm, searchTerm, isVegan, setIsVegan, isTea, setIsTea}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
  };
  return (
    <div className={styles.searchBar}>
    <label onChange={() => {setIsVegan(!isVegan)}}>
      <input className={styles.input} type="checkbox" name="radio"/>
      <span className={styles.span}>Vegan</span>
    </label>
{/*
    <label onClick={setIsTea(!isTea)}>
      <input className={styles.input} type="checkbox" name="radio"/>
      <span className={styles.span}>Tea</span>
    </label> */}
      <form onSubmit={handleSearch}>
        <input type='text' placeholder="search" value={searchTerm} onChange={(event) => {
          setSearchTerm(event.target.value)}}></input>
      </form>
    </div>
  )
};

export default Search;