import React, { useEffect, useState } from 'react';
import gsap, { Bounce, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/sellingSteps/1.png';
import step2 from '/public/assets/images/sellingSteps/2.png';
import step3 from '/public/assets/images/sellingSteps/3.png';
import step4 from '/public/assets/images/sellingSteps/4.png';
import Tick from './Tick';
import { useMediaQuery } from '@mui/material';
import ManageBusinessMobile from './ManageBusinessMobile';

gsap.registerPlugin(ScrollTrigger);

const ManageBusiness = () => {
  const scrollTl = gsap.timeline({});

  const largeScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <>
      {largeScreen ? (
        <ManageBusinessMobile />
      ) : (
        <div className=''>
          test
          {/* <div className='selling-steps xl:container  mx-auto h-full   '>
            <div className='grid lg:grid-cols-2 h-screen item-container items-center justify-center  justify-items-center  '>
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
                      className='h-full w-full  step_img--1 origin-bottom'
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
                <div className='relative flex flex-col gap-4 h-full mt-4'>
                  <div
                    className='w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]'
                    style={{
                      height: `calc(100% - 8px)`,
                    }}
                  ></div>
                  <div className='w-[2px] progressLine  bg-[#6A5B40] absolute left-3 z-[-1] '></div>
                  <div className='flex gap-5 step_1'>
                    <div>
                      <Tick />
                    </div>
                    <div>
                      <h1 className='text-2xl opacity-80'>
                        Add product details
                      </h1>
                      <p className='my-2 text-[#757575]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_2'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--2'>
                      <h1 className='text-2xl opacity-80 '>Create a link</h1>
                      <p className='my-2 text-[#757575] opacity-0 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_3'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--3'>
                      <h1 className='text-2xl opacity-80'>
                        Share on social media
                      </h1>
                      <p className='my-2 text-[#757575] opacity-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-5 step_4'>
                    <div>
                      <Tick />
                    </div>
                    <div className='h-[20px] step_text--4'>
                      <h1 className='text-2xl opacity-80'>Get orders</h1>
                      <p className='my-2 text-[#757575] opacity-0 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default ManageBusiness;
