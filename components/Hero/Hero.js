import React from 'react';
import { Button } from '@mui/material';
import google from '/public/assets/images/google.png';
import apple from '/public/assets/images/apple.png';
import person from '/public/assets/images/person.png';
import { Chart, Facebook, Instagram, WhatsApp } from './Icons';

const Hero = () => {
  return (
    <section className='lg:h-[655px] py-16 lg:py-4   bg-primaryColor text-white relative'>
      <div className='container mx-auto grid lg:grid-cols-2 items-center h-full px-4'>
        <div>
          <h1 className='md:text-4xl text-3xl lg:text-5xl xl:text-[56px]  text-center md:text-left leading-normal lg:leading-[70.2px] font-medium lg:max-w-[585px]'>
            A <span className='underline font-semibold'>Revolutionary</span> way
            of social Buying & Selling
          </h1>
          <p className='my-8 mx-auto text-center md:text-left'>
            A platform designed from the voices of 5000+ <br /> fashion
            designers
          </p>
          <div className='flex gap-5  flex-wrap justify-center md:justify-start'>
            <button>
              <img src={google.src} alt='' />
            </button>
            <button>
              <img src={apple.src} alt='' />
            </button>
          </div>
        </div>
        <div className='justify-self-end mt-20 lg:mt-14'>
          <div className='relative scale-75  md:scale-100'>
            <svg
              width={495}
              height={495}
              viewBox='0 0 495 495'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx={247.5} cy={247.5} r={247.5} fill='#857250' />
              <circle cx={247.5} cy={247.5} r={195.611} fill='#9D8E73' />
              <circle cx={247.499} cy={247.5} r={150.312} fill='#6A5B40' />
            </svg>
            <div className='absolute top-[-35px] left-[-10px]'>
              <img src={person.src} alt='' />
            </div>
            <div className='absolute top-[45%] right-[-50px]'>
              <Chart />
            </div>
            <div className='absolute top-[15%] right-0'>
              <Facebook />
            </div>
            <div className='absolute bottom-0 left-[30%]'>
              <WhatsApp />
            </div>
            <div className='absolute top-[25%] left-0'>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 bottom-16 hidden lg:block'>
        <svg
          width='129'
          height='228'
          viewBox='0 0 129 228'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='15'
            width='57'
            height='57'
            fill='#9D8E73'
            fillOpacity='0.26'
          />
          <rect
            x='-40'
            y='57'
            width='57'
            height='57'
            fill='#9D8E73'
            fillOpacity='0.26'
          />
          <rect
            x='72'
            y='57'
            width='57'
            height='57'
            fill='#9D8E73'
            fillOpacity='0.26'
          />
          <rect
            x='15'
            y='114'
            width='57'
            height='57'
            fill='#9D8E73'
            fillOpacity='0.26'
          />
          <rect
            x='72'
            y='171'
            width='57'
            height='57'
            fill='#9D8E73'
            fillOpacity='0.26'
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
