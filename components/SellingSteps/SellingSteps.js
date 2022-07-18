import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/sellingSteps/1.png';
import step2 from '/public/assets/images/sellingSteps/2.png';
import step3 from '/public/assets/images/sellingSteps/3.png';
import step4 from '/public/assets/images/sellingSteps/4.png';

gsap.registerPlugin(ScrollTrigger);

const SellingSteps = () => {
  useEffect(() => {
    // ScrollTrigger.create({
    //   end: '+=1000',
    //   pin: true,
    //   scrub: true,
    //   trigger: '.selling-steps',
    //   markers: {
    //     startColor: '#ff0000',
    //     endColor: 'green',
    //   },
    // });
    const tlVideo = gsap.timeline({
      scrollTrigger: {
        trigger: '.selling-steps',
        start: '0%',
        end: '100%',
        pin: true,
        markers: {
          startColor: '#ff0000',
          endColor: 'green',
        },
      },
    });

    tlVideo.fromTo(
      '.step_img--1',

      {
        scale: 1,
      },
      {
        scale: 0,
      }
    );
    tlVideo.fromTo(
      '.step_img--2',
      {
        scale: 0,
      },
      {
        scale: 1,
      },
      '<'
    );
    // tlVideo.fromTo(
    //   '.step_img--3',
    //   {
    //     scale: 0,
    //   },
    //   {
    //     scale: 1,
    //   }
    // );
    // tlVideo.fromTo(
    //   '.step_img--4',
    //   {
    //     scale: 0,
    //   },
    //   {
    //     scale: 1,
    //   }
    // );
  }, []);
  return (
    <div className='selling-steps relative h-screen'>
      <div className='container  mx-auto h-full   '>
        <div className='grid grid-cols-2 h-screen  items-center justify-center  justify-items-center  '>
          <div>
            <div className='relative'>
              <svg
                width='474'
                height='474'
                viewBox='0 0 474 474'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='237' cy='237' r='237' fill='#EEECE7' />
              </svg>
              <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                <img
                  src={step1.src}
                  alt=''
                  className='h-full w-full step_img--1 origin-bottom'
                />
              </div>
              <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                <img
                  src={step2.src}
                  alt=''
                  className='h-full w-full  step_img--2 origin-bottom'
                />
              </div>
              <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                <img
                  src={step3.src}
                  alt=''
                  className='h-full w-full  step_img--3 origin-bottom'
                />
              </div>
              <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                <img
                  src={step4.src}
                  alt=''
                  className='h-full w-full  step_img--4 origin-bottom'
                />
              </div>
            </div>
          </div>
          <div className='justify-self-start'>
            <h1 className='text-[40px] text-primaryColor'>
              Sell your product in 4 <br /> simple steps
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingSteps;
