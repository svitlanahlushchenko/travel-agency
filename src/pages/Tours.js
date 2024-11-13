import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../css/App.css';

const ToursSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section>
      <section className='hero-section'>
        <h2 className='hero-section__title'>Package Grid</h2>
      </section>
      <section className='slider-container container'>
        {/* <div className='slider-container__cards'> */}
        <Slider {...settings} ref={sliderRef}>
          <div className='slider-container__card'>
            <img src='/images/Egypt_tours.png' alt='Egypt'></img>
            <h2 className='slider-container__card-title'>
              Discover Serenity, Exploration, and Enlightenment.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img src='/images/Indonesia_tours.png' alt='Indonesia'></img>
            <h2 className='slider-container__card-title'>
              Embracing City Lights, Landmarks, And Iconic Culture.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img src='/images/New-York_tours.png' alt='New York'></img>
            <h2 className='slider-container__card-title'>
              Immersive Cultural Experiences, Local Cuisine.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img src='/images/Saudi-Arab_tours.png' alt='Saudi Arab'></img>
            <h2 className='slider-container__card-title'>
              Exploring Ancient Ruins, Historical Landmarks.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img
              src='/images/Brazil-Sweden-Egypt.png'
              alt='Brazil+Sweden+Egypt'
            ></img>
            <h2 className='slider-container__card-title'>
              Adventure, Art, Architecture, and Mediterranean.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img
              src='/images/Australia-Sweden.png'
              alt='Australia+Sweden'
            ></img>
            <h2 className='slider-container__card-title'>
              A Journey Of Beauty and Inspiration.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img src='/images/New-York-Sweden.png' alt='New York+Sweden'></img>
            <h2 className='slider-container__card-title'>
              Exploring Energy, Landmarks, and Traditions.
            </h2>
          </div>
          <div className='slider-container__card'>
            <img src='/images/India-tours.png' alt='India'></img>
            <h2 className='slider-container__card-title'>
              Embark on Tranquility, Adventure, and Spirituality.
            </h2>
          </div>
        </Slider>
        {/* </div> */}

        <div className='prev-next-buttons'>
          <button className='prev-button' onClick={handlePrevClick}>
            <svg className='prev-button-icon'>
              <use xlinkHref='/images/icons.svg#icon-arrow'></use>
            </svg>
          </button>
          <button className='next-button' onClick={handleNextClick}>
            <svg className='next-button-icon'>
              <use xlinkHref='/images/icons.svg#icon-arrow'></use>
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
};

export default ToursSlider;
