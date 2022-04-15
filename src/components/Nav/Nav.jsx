import React from 'react';

import GITHUB from '../../assets/github-logo.png';
import PT from '../../assets/pt-logo.png';

import './nav.css';

function Nav() {
  return (
    <nav>
      <a
        href="http://www.pedro-areal-torres.me/"
        target="_blank"
        rel="noreferrer"
        className='nav__logo-author'
      >
        <img src={PT} alt="Author" className="logo__author" />
      </a>
      <h1>Wordle</h1>
      <a
        href="https://github.com/pedro-areal-torres/Wordle-Game"
        target="_blank"
        rel="noreferrer"
        className='nav__logo-github'
      >
        <img src={GITHUB} alt="Author" className="logo__github" />
      </a>
    </nav>
  );
}

export default Nav;
