import React from 'react';
import image1 from '/public/assets/images/madefor/1.png';
import image2 from '/public/assets/images/madefor/2.png';
import image3 from '/public/assets/images/madefor/3.png';
import image4 from '/public/assets/images/madefor/4.png';
import image5 from '/public/assets/images/madefor/5.png';
import image6 from '/public/assets/images/madefor/6.png';
const MadeFor = () => {
  return (
    <section className='min-h-screen container mx-auto gap-10 flex items-center  justify-center'>
      <div className='relative w-full h-[794px]'>
        <img src={image1.src} alt='' className='absolute right-[5%] top-44' />
        <img src={image2.src} alt='' className='absolute left-0  top-64 z-10' />
        <img src={image3.src} alt='' className='absolute right-[5%] bottom-0' />
      </div>
      <div className='justify-center w-full text-center'>
        <h1 className='text-[40px] text-primaryColor underline font-medium'>
          Made For
        </h1>
        <p className='text-[#757575] text-[40px] mt-8'>
          creators game changers go-getters leaders different ones rebels
        </p>
        <div className='relative'>
          <h4 className='text-[40px] text-primaryColor font-semibold'>
            for you
          </h4>
          <svg
            className='absolute left-2/4 top-[-8px] translate-x-[-52%]'
            width='211'
            height='78'
            viewBox='0 0 211 78'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M206.718 56.8703C194.053 57.7996 182.126 63.2994 169.666 65.5517C162.667 66.817 155.537 66.6844 148.474 67.3842C140.066 68.2174 131.652 69.4148 123.266 70.4563C107.554 72.4073 92.0265 73.4891 76.2122 74.0975C61.6778 74.6566 47.9188 71.9548 33.7273 69.0185C26.0057 67.4209 17.339 65.1052 10.9822 60.1625C6.84293 56.944 5.24133 53.8442 3.86091 48.8066C2.23177 42.8615 4.16726 39.9448 8.71836 36.2439C18.5442 28.2539 29.7448 21.6637 41.9827 18.1806C70.0964 10.1789 99.0595 5.65935 128.247 4.35083C139.375 3.85193 151.389 2.30306 162.484 3.71177C173.104 5.06025 182.559 10.6133 191.197 16.6443C196.818 20.5693 202.411 26.6213 205.49 32.8102C206.718 35.2803 208.467 38.1938 207.79 41.0965C207.013 44.4294 203.79 47.3135 201.676 49.8083C197.046 55.2719 192.286 60.4127 187.056 65.2896C183.751 68.3705 180.291 72.8861 175.957 74.5322'
              stroke='#6A5B40'
              strokeWidth='5'
              strokeLinecap='round'
            />
          </svg>
        </div>
      </div>
      <div className='relative w-full h-[794px]'>
        <img src={image4.src} alt='' className='absolute left-[20%] top-40' />
        <img
          src={image5.src}
          alt=''
          className='absolute  right-[5%] top-72 z-10'
        />
        <img src={image6.src} alt='' className='absolute  left-[5%] bottom-0' />
      </div>
    </section>
  );
};

export default MadeFor;
