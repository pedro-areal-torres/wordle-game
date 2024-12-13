import React from 'react';

import GITHUB from '../../assets/github-logo.png';
import PT from '../../assets/pt-logo.png';

import './nav.css';

const NavLink = ({ href, imgSrc, imgAlt, className }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>
    <img src={imgSrc} alt={imgAlt} className={`logo__${className}`} />
  </a>
);

const Nav = () => {
  const links = [
    {
      href: 'http://www.pedro-areal-torres.me/',
      imgSrc: PT,
      imgAlt: 'Author',
      className: 'author',
    },
    {
      href: 'https://github.com/pedro-areal-torres/Wordle-Game',
      imgSrc: GITHUB,
      imgAlt: 'GitHub',
      className: 'github',
    },
  ];

  return (
    <nav>
      <NavLink {...links[0]} />
      <h1>Wordle</h1>
      <NavLink {...links[1]} />
    </nav>
  );
};

export default Nav;
