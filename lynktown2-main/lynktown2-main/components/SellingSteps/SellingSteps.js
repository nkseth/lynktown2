import React, { useEffect, useRef, useState } from 'react';
import gsap, { Bounce, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import step1 from '/public/assets/images/sellingSteps/1.png';
import step2 from '/public/assets/images/sellingSteps/2.png';
import step3 from '/public/assets/images/sellingSteps/3.png';
import step4 from '/public/assets/images/sellingSteps/4.png';
import Tick from './Tick';
import { useMediaQuery } from '@mui/material';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import SellingStepMobile from './SellingStepMobile';

gsap.registerPlugin(ScrollTrigger);

const SellingSteps = () => {
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
      title: 'Add product details',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 2,
      title: 'Create a link',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 3,
      title: 'Share link on social media',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
      id: 4,
      title: 'Get orders',
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
      value = 0.8;
    }
    if (clicked[3]) {
      value = 1.5;
    }
    if (clicked[4]) {
      value = 1.9;
    }
    if (progress) progress.style.height = value * 120 + 'px';

    setHeight(height => height * 120);
  }, [clicked]);

  const variantsHeight = {
    show: {
      height: '60px',
    },
    hide: {
      height: '36px',
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

  const [manualClick, setManualClick] = useState(false);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-300px 0px',
    once: true,
  });

  useEffect(() => {
    if (manualClick || largeScreen) return setRunning(false);
    const progressBar = document.querySelector('#progressBar');
    var id = setInterval(frame, 60);
    // let height = 0;

    function frame() {
      if (manualClick || !progressBar || !isInView) return setRunning(false);
      if (height >= 330) {
        setRunning(false);
        clearInterval(id);
      } else {
        height++;
        setRunning(true);

        progressBar.style.height = height + 'px';
        if (height === 110) {
          setClicked(prev => ({
            ...prev,
            2: true,
          }));
        }
        if (height === 215) {
          setClicked(prev => ({
            ...prev,
            3: true,
          }));
        }
        if (height === 315) {
          setClicked(prev => ({
            ...prev,
            4: true,
          }));
        }
      }
    }
  }, [manualClick, largeScreen, isInView]);

  return (
    <>
      {largeScreen ? (
        <SellingStepMobile />
      ) : (
        <div ref={ref} className='wrapper relative pt-36 pb-18 px-4'>
          <div className='selling-steps xl:container  mx-auto h-full   '>
            <div className='grid lg:grid-cols-2 item-container items-center justify-center  justify-items-center  '>
              <div>
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
                  <div className='absolute top-2/4 left-2/4  h-[637.5px] w-[340px] -translate-x-2/4 -translate-y-2/4 '>
                    <AnimatePresence>
                      {clicked[4] && (
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
                          src={step4.src}
                          alt=''
                          className='h-full w-full  step_img--1 origin-bottom'
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className='justify-self-start'>
                <h1 className='text-[40px] text-primaryColor font-medium mb-24  '>
                  Start selling in 4 steps
                </h1>
                <div className='relative flex flex-col gap-4 h-full mt-10'>
                  <div
                    className='w-[2px]  h-full bg-[#D9D9D9] absolute left-3 z-[-1]'
                    style={{
                      height: `calc(100% - 32px)`,
                    }}
                  ></div>
                  <div
                    id='progressBar'
                    className='w-[2px] progressLine transition-all   bg-[#6A5B40] absolute left-3 z-[-1]'
                  ></div>

                  {steps.map(step => {
                    const { id, description, title } = step;
                    return (
                      <motion.div
                        key={id}
                        variants={variantsHeight}
                        animate={clicked[id] ? 'show' : 'hide'}
                        // className={`flex gap-5 step_${id}  ${
                        //   id !== 1 ? 'h-[28px]' : 'h-[140px]'
                        // } transition-all`}
                        className={`flex gap-5 step_${id} `}
                        style={{
                          // height: clicked[id] ? '100%' : '20px',
                          cursor:
                            clicked[id - 1] && !clicked[id + 1] && !running
                              ? 'pointer'
                              : '',
                        }}
                        onClick={e => {
                          if (id === 1) return;
                          if (running) return;

                          if (!clicked[id - 1]) return;
                          if (clicked[id + 1]) return;
                          setManualClick(true);

                          setClicked(prev => ({
                            ...prev,
                            [id]: !prev[id],
                          }));
                        }}
                      >
                        <div>
                          <Tick fill={clicked[id] && true} />
                        </div>
                        <div>
                          <h1 className='text-xl opacity-80'>{title}</h1>
                          {/* <motion.p
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
                          </motion.p> */}
                        </div>
                      </motion.div>
                    );
                  })}
                  {/* <div className='flex gap-5 step_1'>
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
                      <Tick fill={clicked[2] && true} />
                    </div>
                    <div
                      onClick={e => {
                        setClicked(prev => ({
                          ...prev,
                          2: !prev[2],
                        }));
                      }}
                      className='h-[20px] step_text--2 cursor-pointer transition-all '
                      style={{
                        height: clicked[2] ? '100%' : '20px',
                      }}
                    >
                      <h1 className='text-2xl opacity-80 '>Create a link</h1>
                      <p
                        className='my-2 text-[#757575] opacity-0 transition-all '
                        style={{
                          opacity: clicked[2] ? '100%' : '0',
                          transition: `cubicBezier(0.175, 0.885, 0.32, 1.275)`,
                        }}
                      >
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellingSteps;
