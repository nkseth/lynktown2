import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MeasurementImg from '/public/assets/images/features/singleLink.png';

const SingleLink = ({ currentTab }) => {
  return (
    <AnimatePresence>
      {currentTab === 'singleLink' && (
        <motion.div
          key='singleLink'
          className='grid lg:grid-cols-[65%_35%] gap-28 lg:gap-10 items-center h-full lg:h-[560px] '
        >
          <div className='order-2 lg:order-[-1]'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='text-3xl text-[#333]'
            >
              Single link for multiple products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='my-10 leading-[28.61px]'
            >
              You can create a group of products under a single link and share
              them on multiple platforms and with your customers without
              creating multiple links.
            </motion.p>
            <div className='flex justify-center md:justify-start'>
              <button className='bg-primaryColor rounded-[12px] max-w-[212px] h-[45px] w-full md:h-[61px] text-white'>
                Download App
              </button>
            </div>
          </div>
          <div>
            <div className='relative'>
              <svg
                className='max-w-[500] max-h-[500px] mx-auto 2xl:w-[373px] 2xl:h-[373px]'
                viewBox='0 0 373 373'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='186.5' cy='186.5' r='186.5' fill='#EEECE7' />
              </svg>
              <div className='absolute top-2/4 left-2/4 translate-x-[-50%]   translate-y-[-50%]'>
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    ease: 'easeIn',
                  }}
                  src={MeasurementImg.src}
                  alt=''
                  className='origin-bottom'
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SingleLink;
