import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

const Footer = () => {
  return (
    <footer className='footer big-container'>
      <div className='footer__container'>
        <div className='footer__book'>
          <img src='/images/main-logo-white.svg' alt='Logo' />
          <h2 className='footer__title'>Want to Take Tour Packages?</h2>
          <button className='book-button'>Book A Tour</button>
        </div>
        <div className='footer__links'>
          <h3 className='footer__secondary-title'>Quick Link</h3>
          <ul className='footer__link-menu'>
            <li className='footer__link'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='footer__link'>
              <Link to='/destination'>Destination</Link>
            </li>
            <li className='footer__link'>
              <Link to='/tours'>Tour Package</Link>
            </li>
            <li className='footer__link'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='footer__link'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='footer__contacts'>
          <div className='footer__contact-title'>
            <svg className='footer__icon'>
              <use xlinkHref='/images/icons.svg#icon-phone-footer-svg'></use>{' '}
            </svg>
            <h3 className='footer__secondary-title'>More Inquiry</h3>
          </div>
          <a href='tel:+990123456789'>
            <p className='footer__contact'>+990 123 456 789</p>
          </a>
          <div className='footer__contact-title'>
            <svg className='footer__icon'>
              <use xlinkHref='/images/icons.svg#icon-send-mail'></use>{' '}
            </svg>
            <h3 className='footer__secondary-title'>Send Mail</h3>
          </div>
          <a href='mailto:info@example.com' className='footer__contact'>
            info@example.com
          </a>
          <div className='footer__contact-title'>
            <svg className='footer__icon'>
              <use xlinkHref='/images/icons.svg#icon-address'></use>{' '}
            </svg>
            <h3 className='footer__secondary-title'>Address</h3>
          </div>
          <a
            href='https://www.google.com/maps?q=House+168/170,+Avenue+01,+Mirpur+DOHS,+Dhaka+Bangladesh'
            target='_blank'
            rel='noopener noreferrer'
            className='footer__contact'
          >
            House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh
          </a>
        </div>
        <div className='footer__info'>
          <div>
            <h3 className='footer__secondary-title'> We Are Here</h3>
            <p className='footer__text'>
              Quisque purus augue, facilisis andi neque idont accumsan fringilla
              massa. Vivamusol id nibhom condimentum.
            </p>
          </div>
          <div className='footer__payments'>
            <h3 className='footer__secondary-title'>Payment Partner</h3>
            <div className='footer__payment-icons'>
              <img src='/images/visa-card.svg' alt='Visa card'></img>
              <img src='/images/stripe.svg' alt='Stripe card'></img>
              <img src='/images/paypal.svg' alt='Paypal card'></img>
              <img src='/images/woo.svg' alt='Woo card'></img>
              <img src='/images/skrill.svg' alt='Scrill card'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <div>
          <div className='footer__socials'>
            <svg className='footer__social'>
              <use xlinkHref='/images/icons.svg#icon-facebook'></use>{' '}
            </svg>{' '}
            <svg className='footer__social'>
              <use xlinkHref='/images/icons.svg#icon-twitter'></use>{' '}
            </svg>{' '}
            <svg className='footer__social'>
              <use xlinkHref='/images/icons.svg#icon-linkedin'></use>{' '}
            </svg>{' '}
            <svg className='footer__social'>
              <use xlinkHref='/images/icons.svg#icon-instagram'></use>{' '}
            </svg>
            <p className='footer__terms'>
              ©Copyright 2024 BlackRise Theme | Design By @Shawon3
            </p>
          </div>
        </div>
        <div className='footer__privacy'>
          <p className='footer__terms'>BlackRise</p>
          <p className='footer__terms'>Privacy Policy</p>
          <p className='footer__terms'>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
