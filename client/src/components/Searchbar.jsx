import React from 'react';
import './Searchbar.css';
export default function Searchbar({ setIsSearchBarOpen }) {
  return (
    <div className='navbar-searchbar'>
      <a href='#!' className='navbar-icons-styling'>
        <i class='fas fa-search'></i>
      </a>
      <input type='text' placeholder='Search' />
      <a
        href='#!'
        className='navbar-icons-styling'
        onClick={() => setIsSearchBarOpen(false)}
      >
        <i class='fas fa-times'></i>
      </a>
    </div>
  );
}
