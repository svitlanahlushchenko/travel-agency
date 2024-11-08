import React from 'react';
import '../css/App.css';

const Home = () => {
  return (
    <section className='hero-section'>
      <div className='hero-section__container'>
        <div className='hero-section__text'>
          <img src='/images/Mexico-city.svg' alt='Mexico City'></img>
          <h1 className='hero-section__title'>
            Discover Your{' '}
            <span className='hero-section__accent'>Future Vacation</span>{' '}
            Specials!
          </h1>
        </div>
        <div className='hero-section__offers'>
          <div className='hero-section__offer'>
            <svg className='hero-section__icon'>
              <use xlinkHref='/images/icons.svg#icon-tour'></use>{' '}
            </svg>
            <p className='hero-section__offer-name'>Tour</p>
          </div>
          <div className='hero-section__offer'>
            <svg className='hero-section__icon'>
              <use xlinkHref='/images/icons.svg#icon-hotel'></use>{' '}
            </svg>
            <p className='hero-section__offer-name'>Hotel</p>{' '}
          </div>
          <div className='hero-section__offer'>
            <svg className='hero-section__icon'>
              <use xlinkHref='/images/icons.svg#icon-visa'></use>{' '}
            </svg>
            <p className='hero-section__offer-name'>Visa</p>
          </div>
          <div className='hero-section__offer'>
            <svg className='hero-section__icon'>
              <use xlinkHref='/images/icons.svg#icon-activities'></use>{' '}
            </svg>
            <p className='hero-section__offer-name'>Activities</p>
          </div>
          <div className='hero-section__offer'>
            <svg className='hero-section__icon'>
              <use xlinkHref='/images/icons.svg#icon-transport'></use>{' '}
            </svg>
            <p className='hero-section__offer-name'>Transport</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
