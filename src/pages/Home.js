import React from 'react';
import '../css/App.css';
import HotelsSlider from '../components/Slider';
import { Link } from 'react-router-dom';
import AdvantagesCard from '../components/Advantages-cars';

const Home = () => {
  return (
    <section>
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
              tristique. Suspendisse sed elit tortor. Nunc luctus, tellus acces
              elementum accumsan, diam dolor accumsan eros, sit amet porttitor
              diam ante ac augue.
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
                    purus posuere. Vestibulum commodo, massa eget rutrum feugiat
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
                    purus posuere. Vestibulum commodo, massa eget rutrum feugiat
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
                    purus posuere. Vestibulum commodo, massa eget rutrum feugiat
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

      <section className='hotels-section big-container'>
        <div className='hotels-section__container'>
          <h2 className='section-title'>Ultimate Travel Experience</h2>
          <p className='hotels-section__text'>
            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
            erat felis and sed vehicula tortor malesuada gravida. Mauris
            volutpat enim quis.
          </p>
          <div className='hotels-section__icons'>
            <div className='hotels-section__item'>
              <svg className='hotels-section__icon'>
                <use xlinkHref='/images/icons.svg#icon-tour'></use>{' '}
              </svg>
              <p>Tour Package</p>
            </div>
            <div className='hotels-section__item'>
              <svg className='hotels-section__icon'>
                <use xlinkHref='/images/icons.svg#icon-hotel'></use>{' '}
              </svg>
              <p>Hotel</p>
            </div>
            <div className='hotels-section__item'>
              <svg className='hotels-section__icon'>
                <use xlinkHref='/images/icons.svg#icon-transport'></use>{' '}
              </svg>
              <p>Transport</p>
            </div>
          </div>

          <div className='hotels-section__slider'>
            <HotelsSlider />
          </div>
          <button className='button'>View All Hotel</button>
        </div>
      </section>

      <section className='location-section big-container'>
        <div className='location-section__container'>
          <div className='location-section__info'>
            <div className='location-section__text'>
              <h2 className='section-title'>Leading Tour Location</h2>
              <p>
                Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
                erat felis and sed vehicula tortor malesuada gravida. Mauris
                volutpat enim quis.
              </p>
            </div>
            <Link to='/Destination'>
              <button className='button'>All Destination</button>
            </Link>
          </div>

          <div className='location-section__cards'>
            <div className='location-section__card'>
              <h3 className='location-section__card-title'>Sweden</h3>
              <p className='location-section__tours-left'>4 Tour</p>
              <img src='/images/Sweden.jpg' alt='Sweden'></img>
              <button className='location-section__button'>View Details</button>
            </div>

            <div className='location-section__card'>
              <h3 className='location-section__card-title'>Japan</h3>
              <p className='location-section__tours-left'>2 Tour</p>
              <img src='/images/Japan.jpg' alt='Japan'></img>
              <button className='location-section__button'>View Details</button>
            </div>

            <div className='location-section__card'>
              <h3 className='location-section__card-title'>India</h3>
              <p className='location-section__tours-left'>1 Tour</p>
              <img src='/images/India.jpg' alt='India'></img>
              <button className='location-section__button'>View Details</button>
            </div>

            <div className='location-section__card'>
              <h3 className='location-section__card-title'>Brazil</h3>
              <p className='location-section__tours-left'>1 Tour</p>
              <img src='/images/Brazil.jpg' alt='Brazil'></img>
              <button className='location-section__button'>View Details</button>
            </div>

            <div className='location-section__card'>
              <h3 className='location-section__card-title'>Australia</h3>
              <p className='location-section__tours-left'>1 Tour</p>
              <img src='/images/Australia.jpg' alt='Australia'></img>
              <button className='location-section__button'>View Details</button>
            </div>

            <div className='location-section__card'>
              <h3 className='location-section__card-title'>Spain</h3>
              <p className='location-section__tours-left'>0 Tour</p>
              <img src='/images/Spain.jpg' alt='Spain'></img>
              <button className='location-section__button'>View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className='specials-section container'>
        <div className='specials-section__container'>
          <h2 className='section-title'>Display Special Deals</h2>
          <p className='specials-section__text'>
            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor
            erat felis and sed vehicula tortor malesuada gravida. Mauris
            volutpat enim quis.
          </p>
          <div className='specials-section__sales'>
            <div className='specials-section__column-sale'>
              <div className='specials-section__orange-sale'>
                <img
                  className='specials-section__orange-photo'
                  src='/images/people-around-fire.jpg'
                  alt='People around a fire'
                ></img>
                <img
                  src='/images/orange-sale.png'
                  alt='Orange sales'
                  className='specials-section__orange-back'
                ></img>
                <button className='specials-section__orange-button'>
                  View This Trip
                </button>
              </div>

              <div className='specials-section__blue-sale'>
                <img
                  src='/images/women-on-boat.jpg'
                  alt='Women on boat'
                  className='specials-section__blue-photo'
                ></img>
                <img
                  src='/images/blue-sales.png'
                  alt='Blue Sales'
                  className='specials-section__blue-back'
                ></img>
                <button className='specials-section__blue-button'>
                  View This Trip
                </button>
              </div>
            </div>

            <div className='specials-section__green-sale'>
              <img
                src='/images/pair-sales.jpg'
                alt='Perfect pair'
                className='specials-section__green-photo'
              ></img>
              <img
                src='/images/green-sales.png'
                alt='green-sales'
                className='specials-section__green-back'
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className='advantages-section container'>
        <div className='advantages-section__container'>
          <div className='advantages-section__photo-container'>
            <img
              src='/images/couple-near-see.jpg'
              alt='Happy couple'
              className='advantages-section__photo'
            ></img>
          </div>
          <div className='advantages-section__card'>
            <AdvantagesCard />
          </div>
        </div>
      </section>

      <sectiom className='activities-section big-container'></sectiom>
    </section>
  );
};

export default Home;
