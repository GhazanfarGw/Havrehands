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

        <div className='visionbanner min-h-screen'>
          <div data-aos="zoom-out" data-aos-delay="500" className='background-lines duration-500 top-0 right-0 left-0 mx-auto w-full min-h-screen overflow-hidden' style={{ backgroundSize: `${zoomFactor}%` }}>
            <div className='absolute right-0 left-0 md:left-auto md:bottom-1/4 bottom-1/2 md:right-32 mx-auto justify-center overflow-hidden'>
                {/* <div data-aos="fade-up" data-aos-delay="400" className='w-full mx-auto justify-center text-center'>
                    <img className='max-w-60 mx-auto justify-center text-center' src='./Emblame-with-Tile.png' alt='herosection'/>
                </div> */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                > 
                  <h1 style={{ fontFamily: 'CustomFont' }} className='text-[#60A7BA] flex uppercase xl:text-7xl lg:text-7xl md:text-6xl text-4xl justify-center text-center mx-auto'>Vis<span className='border-b border-[#60A7BA]'>ion</span></h1>
                </div>
                <div
                  className='duration-500 pt-5 lg:text-xl text-lg font-medium text-center'
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <p className='text-white uppercase'>Our Vision For The Future</p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard;