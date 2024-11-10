import React from 'react';
import '../css/App.css';

const Home = () => {
  return (
    <section>
      <>
        <section className='hero-section big-container'>
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

        <section className='info-section container'>
          <div className='info-section__container'>
            <div className='info-section__description'>
              <h2 className='section-title'>Who We Are</h2>
              <p>
                Aenean feugiat ante ident augue bibendum, bibendum interdum
                dunatont fermentum. Integer auctor enim eget excet eleifend
                tristique. Suspendisse sed elit tortor. Nunc luctus, tellus
                acces elementum accumsan, diam dolor accumsan eros, sit amet
                porttitor diam ante ac augue.
              </p>
              <div className='info-section__advantages'>
                <div className='info-section__advantage'>
                  <svg className='info-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-safety'></use>{' '}
                  </svg>
                  <div>
                    <h3 className='info-section__advantage-title'>
                      Safety First Always
                    </h3>
                    <p>
                      Praesent gravida nunc at tortor cursus, molestie dapibus
                      purus posuere. Vestibulum commodo, massa eget rutrum
                      feugiat
                    </p>
                  </div>
                </div>
                <div className='info-section__advantage'>
                  <svg className='info-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-guide'></use>{' '}
                  </svg>
                  <div>
                    <h3 className='info-section__advantage-title'>
                      Trusted Travel Guide
                    </h3>
                    <p>
                      Praesent gravida nunc at tortor cursus, molestie dapibus
                      purus posuere. Vestibulum commodo, massa eget rutrum
                      feugiat
                    </p>
                  </div>
                </div>
                <div className='info-section__advantage'>
                  <svg className='info-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-calendar'></use>
                  </svg>
                  <div>
                    <h3 className='info-section__advantage-title'>
                      Time And Stress Savings
                    </h3>
                    <p>
                      Praesent gravida nunc at tortor cursus, molestie dapibus
                      purus posuere. Vestibulum commodo, massa eget rutrum
                      feugiat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='info-section__photos'>
              <img
                src='/images/about-video-img.jpg'
                className='info-section__video-photo'
                alt='Photo'
              ></img>
              <img
                src='/images/about-img.jpg'
                className='info-section__photo'
                alt='Photo'
              ></img>
            </div>
          </div>
        </section>
      </>
    </section>
  );
};

export default Home;
