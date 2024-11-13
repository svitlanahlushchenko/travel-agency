import React from 'react';
import Slider from 'react-slick';
import '../css/App.css';

const Destination = () => {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className='custom-prev'>
        <svg className='custom-prev-icon'>
          <use xlinkHref='/images/icons.svg#icon-arrow'></use>
        </svg>
      </button>
    ),
    nextArrow: (
      <button className='custom-next'>
        <svg className='custom-next-icon'>
          <use xlinkHref='/images/icons.svg#icon-arrow'></use>
        </svg>
      </button>
    ),
  };

  const items = [
    {
      id: 1,
      title: 'Sweden',
      imgSrc: '/images/Destination-Sweden.jpg',
      tours: 4,
    },
    {
      id: 2,
      title: 'Japan',
      imgSrc: '/images/Destination-Japan.jpg',
      tours: 2,
    },
    {
      id: 3,
      title: 'India',
      imgSrc: '/images/Destination-India.jpg',
      tours: 1,
    },
    {
      id: 4,
      title: 'Brazil',
      imgSrc: '/images/Destination-Brazil.jpg',
      tours: 1,
    },
    {
      id: 5,
      title: 'Australia',
      imgSrc: '/images/Destination-Australia.jpg',
      tours: 1,
    },
    {
      id: 6,
      title: 'Spain',
      imgSrc: '/images/Destination-Spain.jpg',
      tours: 0,
    },
    {
      id: 7,
      title: 'Italy',
      imgSrc: '/images/Destination-Italy.jpg',
      tours: 0,
    },
    {
      id: 8,
      title: 'Indonesia',
      imgSrc: '/images/Destination-Indonesia.jpg',
      tours: 0,
    },
  ];

  return (
    <div className='container'>
      <Slider {...settings}>
        <section className='destination-section'>
          <div className='destination-section__container '>
            {items.map(item => (
              <div key={item.id} className='destination-section__card'>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className='destination-section__photo'
                />
                <div className='destination-section__info'>
                  <p className='destination-section__text'>Travel To</p>
                  <h3 className='destination-section__title'>{item.title}</h3>
                </div>
                <p className='destination-section__tour-left'>
                  {item.tours} Tour
                </p>
              </div>
            ))}
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Destination;
