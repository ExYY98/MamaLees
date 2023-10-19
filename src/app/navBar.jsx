
'use client';
import React from 'react';
// import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import style from './page.module.css'

const NavBar = ({setActive}) => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'Right',
      }}
    >
      <button className={style.navButton} onClick={() => {setActive('home')}}>Home</button>
      <button className={style.navButton} onClick={() => {setActive('flavors')}}>Flavors</button>
      <button className={style.navButton} onClick={() => {setActive('contactUs')}}>Contact Us</button>

    </div>
  );
};

export default NavBar;