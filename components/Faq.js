import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      id: 1,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 2,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 3,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 4,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 5,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 6,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
    {
      id: 7,
      question: 'How do I start Selling on my social media using LynkTown?',
      ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
    },
  ];
  return (
    <div className='text-primaryColor bg-[#EEECE7]'>
      <div className='container mx-auto py-10'>
        <h1 className='text-center text-3xl  md:text-4xl lg:text-[40px] font-medium '>
          Still have Questions?
        </h1>
        <div className='max-w-5xl mx-auto py-12'>
          {accordionData.map(item => {
            const { id, question, ans } = item;
            return (
              <Accordion
                key={id}
                sx={{
                  background: 'transparent',
                }}
                expanded={expanded === id}
                onChange={handleChange(id)}
              >
                <AccordionSummary
                  expandIcon={
                    <div className='text-black font-semibold text-lg md:text-2xl opacity-80'>
                      {expanded === id ? <span> - </span> : <span> + </span>}
                    </div>
                  }
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <h1 className='text-[#2A2A2A] text-base font-semibold opacity-80'>
                    {question}
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <p className='text-sm text-[#3B3B3B]'>{ans}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
