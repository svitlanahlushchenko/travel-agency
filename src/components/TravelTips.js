import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/App.css';

const TravelTips = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggleAccordion = index => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='tips'>
      <Tabs
        selectedIndex={activeTabIndex}
        onSelect={index => setActiveTabIndex(index)}
      >
        <TabPanel>
          <div className='accordion-section'>
            <h2 className='general-section__title'>Travel Tips</h2>
            <Accordion
              index={0}
              title='01. What Is Your Payment Schedule And Process?'
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
              title='02. Are There Any Additional Fees Or Surcharges?'
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
              title='03. Can I Transfer My Reservation To Another Person?'
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
              title='04. Can I Request A Private Tour For My Group?'
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
              title='05. Do You Offer Special Rates For Group Bookings?'
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

export default TravelTips;
