import React from 'react';
import './author.css';

const Author = () => {
  const links = [
    {
      href: 'https://github.com/pedro-areal-torres/Wordle-Game',
      label: 'GitHub Code',
    },
    {
      href: 'http://www.pedro-areal-torres.me/',
      label: "Author's Profile",
    },
  ];

  return (
    <div className="author">
      {links.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noreferrer">
          <button className="author__btn">{link.label}</button>
        </a>
      ))}
    </div>
  );
};

export default Author;
