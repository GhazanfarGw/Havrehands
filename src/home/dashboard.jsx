import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Dashboard() {

  return (
    <>
    <div className='herosecbg md:border-b md:border-[#18C4FF] md:border-opacity-20 xl:min-h-screen lg:min-h-screen md:min-h-[40rem] duration-500'>
      <div className='max-w-screen-xl lg:px-10 px-5 mx-auto justify-center items-center'>
        <div className='md:flex md:grid-cols-2 gap-x-20 justify-between mx-auto lg:pt-60 md:pt-40 pt-28'>
          <div className='first block lg:hidden md:hidden xl:hidden mx-auto justify-end max-w-xl h-28'>
            <img className='' src='./computer1.png' alt='image'/>
          </div>
          <div className='text-white'>
            <p className='first font-semibold tracking-widest text-[#18C4FF]'>
              Welcome to
            </p>
            <TypeAnimation
              sequence={[
                'HavreHands - Your Partner in Digital Excellence',
                1000,
                'HavreHands - Your Partner in Cutting-edge Technologies',
                1000,
                'HavreHands - Your Partner in Digital Landscape',
                1000,
                'HavreHands - Your Partner in Digital Transparency',
                1000,
              ]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
              className='second xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-semibold mx-auto justify-start max-w-xl duration-500'
            />
            <p className='third lg:pt-10 md:pt-10 pt-8 font-semibold tracking-widest lg:text-lg md:text-lg'>
              Over 10 years in the development & digital marketing with successful track record.
            </p>
            <div className='fourth lg:pt-16 md:pt-14 pt-12 uppercase'>
              <a className='py-4 px-8 border-l-8 border-[#18C4FF] text-sm hover:bg-[#18C4FF] duration-300 bg-[#353535] text-white font-semibold hover:scale-105 transform:translate3d(0%, 0%, 0px)' href='./'>
                Get In Touch
              </a>
            </div>
          </div>
          <div className='five hidden lg:block xl:block md:block mx-auto justify-end max-w-xl'>
            <img className='xl:max-w-lg lg:max-w-lg md:max-w-sm duration-300 ' src='./computer.png' alt='image'/>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}


// import { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

// function Dashboard() {
//   const [scrollPosition, setScrollPosition] = useState (0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };

//   }, []);

//   const zoomFactor = 100 + scrollPosition / 10;

//   return (
//     <>

//     <div className='background-image duration-500 -mt-4 Main-home-page-banner' style={{ backgroundSize: `${zoomFactor}%` }}>
//       <div className='max-w-screen-xl mx-auto justify-center text-center min-h-screen py-10 lg:px-10 px-5'>
//         <div className='py-40 items-start'>
//           {/* <div className='max-w-sm justify-center mx-auto text-center'>
//             <img src='./white-logo1.png' alt='herosection'/>
//           </div> */}
//           <div data-aos="fade-up" data-aos-delay="400">
//             <h1 className='text-8xl text-center text-[#fff] uppercase font-semibold'>
//               Havrehands
//             </h1>
//             <p className='text-white text-2xl pt-5 font-semibold'>
//               Your Partner in Digital Excellence
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Dashboard;
