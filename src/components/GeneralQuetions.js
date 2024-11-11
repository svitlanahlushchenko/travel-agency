import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/App.css';

const GeneralQuestions = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Добавлено состояние для вкладок
  const [activeAccordion, setActiveAccordion] = useState(null); // Состояние для аккордеонов

  const handleToggleAccordion = index => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='general-card'>
      <Tabs
        selectedIndex={activeTabIndex}
        onSelect={index => setActiveTabIndex(index)}
      >
        <TabPanel>
          <div className='accordion-section'>
            <h2 className='general-section__title'>General</h2>
            <Accordion
              index={0}
              title='01. How do I book a trip on your website?'
              isOpen={activeAccordion === 0}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 0 ? 'open' : 'closed'}
            >
              <p>
                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inci only Integer purus onthis felis non aliquam.Mauris nec
                just vitae ann auctor tol euismod sit amet non ipsul growing
                this
              </p>
            </Accordion>
            <Accordion
              index={1}
              title='02. What Payment Methods Do You Accept?'
              isOpen={activeAccordion === 1}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 1 ? 'open' : 'closed'}
            >
              <p>
                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inci only Integer purus onthis felis non aliquam.Mauris nec
                just vitae ann auctor tol euismod sit amet non ipsul growing
                this
              </p>
            </Accordion>
            <Accordion
              index={2}
              title='03. Can I make changes to my reservation after booking?'
              isOpen={activeAccordion === 2}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 2 ? 'open' : 'closed'}
            >
              <p>
                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inci only Integer purus onthis felis non aliquam.Mauris nec
                just vitae ann auctor tol euismod sit amet non ipsul growing
                this
              </p>
            </Accordion>
            <Accordion
              index={3}
              title='04. What is your cancellation policy?'
              isOpen={activeAccordion === 3}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 3 ? 'open' : 'closed'}
            >
              <p>
                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inci only Integer purus onthis felis non aliquam.Mauris nec
                just vitae ann auctor tol euismod sit amet non ipsul growing
                this
              </p>
            </Accordion>
            <Accordion
              index={4}
              title='05. Do You Offer Group Booking Discounts?'
              isOpen={activeAccordion === 4}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 4 ? 'open' : 'closed'}
            >
              <p>
                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inci only Integer purus onthis felis non aliquam.Mauris nec
                just vitae ann auctor tol euismod sit amet non ipsul growing
                this
              </p>
            </Accordion>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

function Accordion({ title, children, index, isOpen, onToggle, className }) {
  return (
    <div className={`accordion-item ${className}`}>
      <button onClick={() => onToggle(index)} className='accordion-toggle'>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className='accordion-content'>{children}</div>}
    </div>
  );
}

export default GeneralQuestions;
