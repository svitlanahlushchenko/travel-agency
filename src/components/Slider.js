import React from 'react';
import Slider from 'react-slick';

const NextArrow = props => {
  const { onClick } = props;
  return (
    <button className='next-button' onClick={onClick}>
      <svg className='next-arrow'>
        <use xlinkHref='/images/icons.svg#icon-triangle-arrow'></use>
      </svg>
    </button>
  );
};

const PrevArrow = props => {
  const { onClick } = props;
  return (
    <button className='prev-button' onClick={onClick}>
      <svg className='prev-arrow'>
        <use xlinkHref='/images/icons.svg#icon-triangle-arrow'></use>
      </svg>
    </button>
  );
};

const HotelsSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
        <div className='photo-container'>
          <img
            src='/images/Eclipse-Haven.jpg'
            alt='Photo of Hotel'
            className='hotel-photo'
          ></img>
          <img
            src='/images/Breakfast-Included.jpg'
            alt='Breakfast Included'
            className='breakfast-photo'
          ></img>
        </div>
        <div className='slide-info'>
          <h3 className='slide-title'>Eclipse Haven Lodge</h3>
          <div className='slide-address'>
            <svg className='address-logo'>
              <use xlinkHref='/images/icons.svg#icon-address'></use>{' '}
            </svg>
            <p>
              House 168/170, Road 02, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
            </p>
            <a
              className='link-map'
              href='https://www.google.com/maps?q=House+168/170,+Road+02,+Avenue+01,+Mirpur+DOHS,+Dhaka,+Bangladesh'
              target='_blank'
              rel='noopener noreferrer'
            >
              See Map
            </a>
          </div>
          <div className='services'>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-tv'></use>{' '}
              </svg>
              <p>TV</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-heater'></use>{' '}
              </svg>
              <p>Heater</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-safe'></use>{' '}
              </svg>
              <p>Saving Safe</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-wi-fi'></use>{' '}
              </svg>
              <p>Free Wifi</p>
            </div>
          </div>
          <div className='service'>
            <svg className='service-logo'>
              <use xlinkHref='/images/icons.svg#icon-home-phone'></use>{' '}
            </svg>
            <p>Phone</p>
          </div>
          <div className='hotel-room'>
            <div className='room'>
              <h4 className='room-title'>Sea View</h4>
              <h4 className='room-title'>Semi Double</h4>
              <p>1 king bed</p>
              <p className='accent-text'>Free cancellation</p>
              <p>before 48 hours</p>
            </div>
            <div className='price'>
              <p>1 Night, 2 Adults</p>
              <p className='accent-price'>
                $126<span className=' crossed-price'>$160</span>
              </p>
              <button className='button'>Check Availability</button>
            </div>
          </div>
        </div>
      </div>

      <div className='slide'>
        <img
          src='/images/Twilight-Serenity.jpg'
          alt='Photo of Hotel'
          className='hotel-photo'
        ></img>
        <img
          src='/images/Breakfast-Included.jpg'
          alt='Breakfast Included'
          className='breakfast-photo'
        ></img>
        <div className='slide-info'>
          <h3 className='slide-title'>Twilight Serenity Manore</h3>
          <div className='slide-address'>
            <svg className='address-logo'>
              <use xlinkHref='/images/icons.svg#icon-address'></use>{' '}
            </svg>
            <p>
              House 168/170, Road 02, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
            </p>
            <a
              className='link-map'
              href='https://www.google.com/maps?q=House+168/170,+Road+02,+Avenue+01,+Mirpur+DOHS,+Dhaka,+Bangladesh'
              target='_blank'
              rel='noopener noreferrer'
            >
              See Map
            </a>
          </div>
          <div className='services'>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-tv'></use>{' '}
              </svg>
              <p>TV</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-heater'></use>{' '}
              </svg>
              <p>Heater</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-safe'></use>{' '}
              </svg>
              <p>Saving Safe</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-wi-fi'></use>{' '}
              </svg>
              <p>Free Wifi</p>
            </div>
          </div>
          <div className='service'>
            <svg className='service-logo'>
              <use xlinkHref='/images/icons.svg#icon-home-phone'></use>{' '}
            </svg>
            <p>Phone</p>
          </div>
          <div className='hotel-room'>
            <div className='room'>
              <h4 className='room-title'>Family Room</h4>
              <h4 className='room-title'>Quine Modern Room</h4>
              <h4 className='room-title'>Semi Double</h4>
              <p>1 king bed</p>
              <p className='accent-text'>Free cancellation</p>
              <p>before 48 hours</p>
            </div>
            <div className='price'>
              <p>1 Night, 2 Adults</p>
              <p className='accent-price'>$46</p>
              <button className='button'>Check Availability</button>
            </div>
          </div>
        </div>
      </div>

      <div className='slide'>
        <img
          src='/images/Dusk-Retreat.jpg'
          alt='Photo of Hotel'
          className='hotel-photo'
        ></img>
        <div className='slide-info'>
          <h3 className='slide-title'>Dusk Retreat Resort</h3>
          <div className='slide-address'>
            <svg className='address-logo'>
              <use xlinkHref='/images/icons.svg#icon-address'></use>{' '}
            </svg>
            <p>
              House 168/170, Road 02, Avenue 01, Mirpur DOHS, Dhaka, Bangladesh
            </p>
            <a
              className='link-map'
              href='https://www.google.com/maps?q=House+168/170,+Road+02,+Avenue+01,+Mirpur+DOHS,+Dhaka,+Bangladesh'
              target='_blank'
              rel='noopener noreferrer'
            >
              See Map
            </a>
          </div>
          <div className='services'>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-tv'></use>{' '}
              </svg>
              <p>TV</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-heater'></use>{' '}
              </svg>
              <p>Heater</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-safe'></use>{' '}
              </svg>
              <p>Saving Safe</p>
            </div>
            <div className='service'>
              <svg className='service-logo'>
                <use xlinkHref='/images/icons.svg#icon-wi-fi'></use>{' '}
              </svg>
              <p>Free Wifi</p>
            </div>
          </div>
          <div className='service'>
            <svg className='service-logo'>
              <use xlinkHref='/images/icons.svg#icon-home-phone'></use>{' '}
            </svg>
            <p>Phone</p>
          </div>
          <div className='hotel-room'>
            <div className='room'>
              <h4 className='room-title'>Couple Room</h4>
              <h4 className='room-title'>Family Room</h4>
              <p>1 king bed</p>
              <p className='accent-text'>Free cancellation</p>
              <p>before 48 hours</p>
            </div>
            <div className='price'>
              <p>1 Night, 2 Adults</p>
              <p className='accent-price'>$120 </p>
              <button className='button'>Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HotelsSlider;
