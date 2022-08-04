import React from 'react';
import step1 from '/public/assets/images/manageBusiness/1.png';
import step2 from '/public/assets/images/manageBusiness/2.png';
import step3 from '/public/assets/images/manageBusiness/3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

const steps = [
  {
    id: 1,
    image: step1,
    title: 'Customer’s request the order from bio ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  },
  {
    id: 2,
    image: step2,
    title: 'You have to accept the order request',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  },
  {
    id: 3,
    image: step3,
    title: 'Customer will receive order confirmation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
  },
];

const autoPlay = 5000;
const SLIDE_LENGTH = 3;

function move(idx) {
  var elem = document.getElementById(`progressBar--${idx}`);

  if (idx === 0) {
    const progressBars = document.querySelectorAll('.progressBar');
    progressBars.forEach(item => {
      item.style.width = 0 + '%';
    });
  }
  var width = 1;
  var autoplayTime = autoPlay / 100;
  var id = setInterval(frame, autoplayTime);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
const ManageBusinessMobile = () => {
  return (
    <div className='container mx-auto py-16 px-4'>
      <h1 className='text-2xl text-primaryColor font-medium text-center md:text-4xl'>
        Manage your online buisness at your finger tips
      </h1>
      <div className='relative my-8'>
        <div className='absolute top-16 left-2/4 translate-x-[-50%]'>
          <svg
            className='w-[292px] h-[292px] sm:w-[420px] sm:h-[420px] '
            viewBox='0 0 292 293'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='146' cy='146.515' r='146' fill='#EEECE7' />
          </svg>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}

          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          // onSlideChange={e => move(e.activeIndex)}
          // onSwiper={swiper => {
          //   move(swiper.activeIndex);
          // }}
          className='!pb-14  seller-steps'
        >
          {steps.map(item => {
            const { id, image, title, description } = item;

            return (
              <SwiperSlide key={id}>
                <div className='max-w-[767px] mx-auto flex justify-center flex-col items-center'>
                  <img
                    src={image.src}
                    alt=''
                    className='max-h-[420.65px] sm:max-h-[600px]'
                  />

                  <h3 className='text-base text-black font-semibold opacity-80 md:text-2xl text-center'>
                    {title}
                  </h3>
                  <div className='py-4 text-sm md:text-base text-center text-[#757575]'>
                    <h2>{description}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className='pagination flex items-center gap-4 max-w-2xl'>
          <div className='relative bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={0}
              id='progressBar--0'
              className='absolute progressBar transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative  bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={1}
              id='progressBar--1'
              className='absolute progressBar transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={2}
              id='progressBar--2'
              className='absolute progressBar transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
          <div className='relative bg-[#D9D9D9] h-2 flex-1 rounded-full'>
            <div
              data-index={3}
              id='progressBar--3'
              className='absolute progressBar transition-all h-full  bg-primaryColor rounded-full'
            ></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ManageBusinessMobile;
