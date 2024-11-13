import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/App.css';
import GeneralQuestions from '../components/GeneralQuetions';
import TravelTips from '../components/TravelTips';
const FAQ = () => {
  return (
    <section>
      <section className='hero-section big-container'>
        <h2 className='hero-section__title'>Faqs</h2>
      </section>

      <section className='general-section container'>
        <div className='general-section__container'>
          <div className='general-section__container'>
            <div className='general-section__photo-card'>
              <img
                src='/images/people-dog-lake.jpg'
                alt='People near the lake'
                className='general-section__photo'
              ></img>
              <img
                src='/images/general-sale-back.png'
                alt='Sale'
                className='general-section__sale'
              ></img>
              <button className='general-section__button button'>
                Book Now
              </button>
            </div>
            <div className='general-section__info'>
              <div className='general-section__quetion-card'>
                <GeneralQuestions />
              </div>
              <div className='general-section__tips'>
                <TravelTips />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
