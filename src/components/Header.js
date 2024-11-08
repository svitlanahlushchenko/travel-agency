import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header'>
      <div className='header__container'>
        <img src='/images/main-logo.svg' alt='Logo'></img>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/tours'>Tours</Link>
            </li>
            <li>
              <Link to='/destination'>Destination</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/faq'>Faqs</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
