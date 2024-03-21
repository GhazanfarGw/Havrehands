// import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

// const Dashboard = () => {
//     return (
//         <>
//             <div className='duration-500 justify-center'>
//                 <div className='md:h-80 shadow-2xl'>
//                     <img className='duration-500 w-full object-cover md:h-[32rem] rounded-xl' src='./MISSION.jpg' alt='image'/>
//                 </div>
//                 <div className='justify-center overflow-hidde pt-8 md:pt-0'>
//                     <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
//                         <div className=''>
//                             <p className='text-[#18C4FF] uppercase'>
//                                 Havrehands
//                             </p>
//                             <h1 className='second xl:text-5xl lg:text-5xl text-3xl font-semibold md:text-5xl items-center duration-300 text-[#fff]'>
//                                 Mission
//                             </h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Dashboard;



import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function Dashboard() {
  const [scrollPosition, setScrollPosition] = useState (0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const zoomFactor = 100 + scrollPosition / 10;

  return (
    <>
        <div className='missionbanner min-h-screen'>
          <div data-aos="zoom-out" data-aos-delay="500" className='background-lines duration-500 absolute top-0 right-0 left-0 mx-auto w-full min-h-screen' style={{ backgroundSize: `${zoomFactor}%` }}>
            <div className='items-center duration-50 bottom-1/2 left-0 right-0 md:right-auto absolute md:left-32 md:bottom-1/4 max-w-screen-xl mx-auto'>
              {/* <div className='items-start'>
                <div data-aos="fade-up" data-aos-delay="400" className='max-w-32 mx-auto text-center justify-center'>
                  <img src='./Emblame-with-Tile.png' alt='herosection'/>
                </div>
              </div> */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
              > 
                <h1 style={{ fontFamily: 'CustomFont' }} className='text-[#60A7BA] duration-500 uppercase xl:text-7xl lg:text-7xl md:text-6xl text-4xl flex text-center xl:mx-auto lg:mx-auto md:mx-0 mx-auto justify-center'>Mis <span className='border-b border-[#60A7BA]'>sion</span></h1>
              </div>
              <div
                className='max-w-2xl xl:mx-auto lg:mx-auto md:mx-0 mx-auto duration-500 justify-start text-center pt-5 lg:text-xl text-lg font-medium'
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className='text-white uppercase'>Our Commitment to Excellence</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard;