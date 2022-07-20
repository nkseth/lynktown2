import React, { useEffect, useRef, useState } from 'react';
import gsap, { Bounce, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/manageBusiness/1.png';
import step2 from '/public/assets/images/manageBusiness/2.png';
import step3 from '/public/assets/images/manageBusiness/3.png';
import Tick from './Tick';
import { useMediaQuery } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import ManageBusinessMobile from './ManageBusinessMobile';

gsap.registerPlugin(ScrollTrigger);

const ManageBusiness = () => {
  const scrollTl = gsap.timeline({
    defaults: {
      ease: Power3.easeIn,
    },
  });
  const largeScreen = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    gsap.set('.step_1 svg .circle', {
      fill: '#3AC267',
      stroke: '#3AC267',
    });
    gsap.set('.step_1 svg .tick', {
      fill: '#fff',
    });

    // scrollTl.to(
    //   '.progressLine',

    //   {
    //     height: '100%',
    //     duration: 20,
    //   }
    // );
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Customer’s request the order from bio ',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 2,
      title: 'You have to accept the order request',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 3,
      title: 'You have to accept the order request',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
  ];

  const [clicked, setClicked] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    const progress = document.querySelector('.progressLine');
    let value = 0;
    if (clicked[2]) {
      value = 1;
    }
    if (clicked[3]) {
      value = 2;
    }
    if (clicked[4]) {
      value = 3.7;
    }
    progress.style.height = value * 120 + 'px';

    setHeight(height => height * 120);
  }, [clicked]);

  const variantsHeight = {
    show: {
      height: '100px',
    },
    hide: {
      height: '28px',
    },
  };
  const variantsText = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  const [height, setHeight] = useState(0);

  const [manualClick, setManualClick] = useState(true);

  useEffect(() => {
    if (manualClick || largeScreen) return;
    const progressBar = document.querySelector('#progressBarManage');
    var id = setInterval(frame, 80);
    // let height = 0;

    function frame() {
      if (manualClick || !progressBar) return;

      if (height >= 320) {
        clearInterval(id);
      } else {
        height++;
        progressBar.style.height = height + 'px';
        if (height === 110) {
          setClicked(prev => ({
            ...prev,
            2: true,
          }));
        }
        if (height === 260) {
          setClicked(prev => ({
            ...prev,
            3: true,
          }));
        }
      }
    }
  }, [largeScreen]);

  return (
    <>
      {largeScreen ? (
        <ManageBusinessMobile />
      ) : (
        <div className='wrapper relative py-32  px-4'>
          <div className='selling-steps xl:container  mx-auto h-full   '>
            <div className='flex lg:grid-cols-2  item-container items-center justify-center  justify-items-center  '>
              <div className='flex-[1.5] xl:flex-1'>
                <h1 className='text-[40px] text-primaryColor'>
                  Manage your online <br />
                  buisness at your finger tips
                </h1>
                <div className='relative flex flex-col gap-4 h-full mt-4'>
                  <div
                    className='w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]'
                    style={{
                      height: `calc(100% - 8px)`,
                    }}
                  ></div>
                  <div
                    id='progressBarManage'
                    className='w-[2px] progressLine transition-all   bg-[#6A5B40] absolute left-3 z-[-1]'
                  ></div>

                  {steps.map(step => {
                    const { id, description, title } = step;
                    return (
                      <motion.div
                        variants={variantsHeight}
                        animate={clicked[id] ? 'show' : 'hide'}
                        // className={`flex gap-5 step_${id}  ${
                        //   id !== 1 ? 'h-[28px]' : 'h-[140px]'
                        // } transition-all`}
                        className={`flex gap-5 step_${id} `}
                        style={{
                          // height: clicked[id] ? '100%' : '20px',
                          cursor:
                            clicked[id - 1] && !clicked[id + 1]
                              ? 'pointer'
                              : '',
                        }}
                        onClick={e => {
                          if (id === 1) return;

                          if (!clicked[id - 1]) return;
                          if (clicked[id + 1]) return;

                          setClicked(prev => ({
                            ...prev,
                            [id]: !prev[id],
                          }));
                        }}
                        key={id}
                      >
                        <div>
                          <Tick fill={clicked[id] && true} />
                        </div>
                        <div>
                          <h1 className='text-2xl opacity-80'>{title}</h1>
                          <motion.p
                            variants={variantsText}
                            animate={clicked[id] ? 'show' : 'hide'}
                            // className={`my-2 text-[#757575]  ${
                            //   id !== 1 ? 'opacity-0' : 'opacity-100'
                            // }`}
                            className={`my-2 text-[#757575]`}
                            // style={{
                            //   opacity: clicked[id] ? '100%' : '0',
                            // }}
                          >
                            {description}
                          </motion.p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className='flex-1 justify-end xl:justify-center flex '>
                <div className='relative'>
                  <svg
                    className='w-[400px] h-[400px] xl:w-[474px] xl:h-[474px]'
                    viewBox='0 0 474 474'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='237' cy='237' r='237' fill='#EEECE7' />
                  </svg>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[1] && !clicked[2] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step1.src}
                          alt=''
                          className='h-full w-full  step_img--1 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[2] && !clicked[3] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step2.src}
                          alt=''
                          className='h-full w-full  step_img--2 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[3] && !clicked[4] && (
                        <motion.img
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{ type: 'spring', bounce: 0.35 }}
                          src={step3.src}
                          alt=''
                          className='h-full w-full  step_img--1 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageBusiness;
