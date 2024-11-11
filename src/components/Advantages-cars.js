import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/App.css';

const AdvantagesCard = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggleAccordion = index => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='card'>
      <h2 className='card-title'>Why You Should Choose Our Travel Services</h2>

      <Tabs
        selectedIndex={activeTabIndex}
        onSelect={index => setActiveTabIndex(index)}
      >
        <TabList className='tablist'>
          <Tab
            style={{
              color: activeTabIndex === 0 ? 'white' : 'var(--black-title)',
              borderRadius: '10px 0 0 10px ',
              backgroundColor:
                activeTabIndex === 0 ? 'var(--brand-green)' : '#F3F8F6',
              border:
                activeTabIndex === 0
                  ? '1px solid var(--brand-green)'
                  : '1px solid var(--footer-gray)',
              padding: '12px 32px',
              cursor: 'pointer',
            }}
          >
            General Travel
          </Tab>
          <Tab
            style={{
              color: activeTabIndex === 1 ? 'white' : 'var(--black-title)',
              backgroundColor:
                activeTabIndex === 1 ? 'var(--brand-green)' : '#F3F8F6',
              border:
                activeTabIndex === 1
                  ? '1px solid var(--brand-green)'
                  : '1px solid var(--footer-gray)',
              padding: '12px 32px',
              cursor: 'pointer',
            }}
          >
            Transportation
          </Tab>
          <Tab
            style={{
              color: activeTabIndex === 2 ? 'white' : 'var(--black-title)',
              borderRadius: '0 10px 10px 0',
              backgroundColor:
                activeTabIndex === 2 ? 'var(--brand-green)' : '#F3F8F6',
              border:
                activeTabIndex === 2
                  ? '1px solid var(--brand-green)'
                  : '1px solid var(--footer-gray)',
              padding: '12px 32px',
              cursor: 'pointer',
            }}
          >
            Payment
          </Tab>
        </TabList>

        <TabPanel>
          <div className='accordion-section'>
            <Accordion
              index={0}
              title='01. How do I book a trip with your agency?'
              isOpen={activeAccordion === 0}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 0 ? 'open' : 'closed'}
            >
              <p>Our booking process is simple! Just follow these steps...</p>
            </Accordion>
            <Accordion
              index={1}
              title='02. What Payment Methods Do You Accept?'
              isOpen={activeAccordion === 1}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 1 ? 'open' : 'closed'}
            >
              <p>We accept credit cards, PayPal, and bank transfers...</p>
            </Accordion>
            <Accordion
              index={2}
              title='03. What Is Your Cancellation Policy?'
              isOpen={activeAccordion === 2}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 2 ? 'open' : 'closed'}
            >
              <p>
                Our cancellation policy allows you to cancel within 7 days...
              </p>
            </Accordion>
            <Accordion
              index={3}
              title='04. Can I Make Changes to My Reservation After Booking?'
              isOpen={activeAccordion === 3}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 3 ? 'open' : 'closed'}
            >
              <p>
                You can make changes to your reservation up to 48 hours before
                the departure date...
              </p>
            </Accordion>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='accordion-section'>
            <Accordion
              index={4}
              title='Do you offer airport transfers?'
              isOpen={activeAccordion === 4}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 4 ? 'open' : 'closed'}
            >
              <p>Yes, we offer private airport transfers...</p>
            </Accordion>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='accordion-section'>
            <Accordion
              index={5}
              title='How do I pay for my trip?'
              isOpen={activeAccordion === 5}
              onToggle={handleToggleAccordion}
              className={activeAccordion === 5 ? 'open' : 'closed'}
            >
              <p>Payments are processed securely through our website...</p>
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

export default AdvantagesCard;
