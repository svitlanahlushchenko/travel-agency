import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__container'>
        <img src='/images/main-logo.svg' alt='Logo' />
        <nav>
          <ul className='header__menu'>
            <li className='header__link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='header__link'>
              <Link to='/about'>About</Link>
            </li>
            <li className='header__link'>
              <Link to='/tours'>Tours</Link>
            </li>
            <li className='header__link'>
              <Link to='/destination'>Destination</Link>
            </li>
            <li className='header__link'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='header__link'>
              <Link to='/faq'>Faqs</Link>
            </li>
            <li className='header__link'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='header__contacts'>
          <div className='header__icons'>
            <svg className='header__icon'>
              <use xlinkHref='/images/icons.svg#icon-user'></use>{' '}
            </svg>
            <svg className='header__icon'>
              <use xlinkHref='/images/icons.svg#icon-squares'></use>{' '}
            </svg>
          </div>
          <div className='header__call'>
            <a href='tel:+990123456789'>
              <svg className='header__call-icon'>
                <use xlinkHref='/images/icons.svg#icon-phone'></use>{' '}
              </svg>
            </a>
            <div className='header__call-info'>
              <a href='tel:+990123456789'>
                <p className='header__call-text'>To More Inquiry</p>
              </a>
              <a href='tel:+990123456789'>
                <p className='header__call-number'>+990 123 456 789</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
