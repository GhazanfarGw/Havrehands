// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Tooltip } from '@mui/material'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

// function Post() {
//     const settings = {
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         centerMode: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         pauseOnHover: true,
//         centerPadding: "60px",
//         dots: true,

//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               centerPadding: "30px",
//               infinite: true,
//               infinite: true,
//               autoplay: true,
//               autoplaySpeed: 2000,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               centerPadding: "0px",
//               infinite: true,
//               autoplay: true,
//               autoplaySpeed: 4000,
//               initialSlide: 1
              
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               autoplay: true,
//               autoplaySpeed: 4000,
//               centerPadding: "0px",
//               dots: true,
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className='px-5 lg:px-10 justify-center mx-auto lg:pt-20 sm:pt-0 pt-0 duration-500'>
//       <div className='lg:pt-5 sm:pt-20 pt-5 lg:flex md:flex justify-between mx-auto pb-5 max-w-screen-xl'>
//         <div data-aos="fade-up" data-aos-delay="100">
//           <p className='first text-[#18C4FF] lg:font-bold'>
//             What We Actually Offer
//           </p> 
//           <h1 className='second lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-white pt-3'>
//             Check Our Services
//           </h1>
//         </div>
//         <div className='lg:pt-16 md:pt-10 pt-8 uppercase'>
//           <a data-aos="fade-up-left" data-aos-delay="100" className='py-4 px-8 border-l-4 md:border-l-8 border-[#18C4FF] text-sm hover:bg-[#18C4FF] duration-300 bg-[#353535] text-white font-semibold hover:scale-105 transform:translate3d(0%, 0%, 0px);' href='./'>
//             View More Services
//           </a>
//         </div>
//       </div>
//       <div data-aos="fade-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto'>
//         <Slider {...settings} className='flex mx-auto items-center gap-4 lg:pt-5 md:pt-4 sm:pt-3'>
//             <Tooltip data-aos="fade-up" data-aos-delay="300" placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
//               <img src='./web_dev.jpg' alt='Image'/>
//               <div className='lg:px-3 md:px-3 sm:px-2'>
//                 <h1 className='text-white text-xl pt-5'>
//                   Web Development
//                 </h1>
//                 <p className='text-[#747474] pt-3'>
//                   Web Development: From custom designs to responsive interfaces, we create websites that not only look great but also drive results.
//                 </p>
//               </div>
//             </Tooltip>
//             <Tooltip data-aos="fade-up" data-aos-delay="400" placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
//               <img src='./social_media.jpg' alt='Image'/>
//               <div className='lg:px-3 md:px-3 sm:px-2'>
//                 <h1 className='text-white text-xl pt-5'>
//                   Social Media Marketing
//                 </h1>
//                 <p className='text-[#747474] pt-3'>
//                   Social Media Marketing: We develop strategic campaigns and create engaging content to help you connect with your audience and grow your brand.
//                 </p>
//               </div>
//             </Tooltip>
//             <Tooltip data-aos="fade-up" data-aos-delay="400" placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
//               <img src='./search_engine.jpg' alt='Image'/>
//               <div className='lg:px-3 md:px-3 sm:px-2'>
//                 <h1 className='text-white text-xl pt-5'>
//                   Search Engine Optimization
//                 </h1>
//                 <p className='text-[#747474] pt-3'>
//                   Search Engine Optimization (SEO): Our comprehensive SEO services are designed to improve your online visibility and drive organic traffic to your website.
//                 </p>
//               </div>
//             </Tooltip>
//             <Tooltip data-aos="fade-up" data-aos-delay="500" placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
//               <img src='./photography.jpg' alt='Image'/>
//               <div className='lg:px-3 md:px-3 sm:px-2'>
//                 <h1 className='text-white text-xl pt-5 font'>
//                   Photography
//                 </h1>
//                 <p className='text-[#747474] pt-3'>
//                   Photography: Our professional photographers capture stunning images that showcase your brand in the best possible light.
//                 </p>
//               </div>
//             </Tooltip>
//             <Tooltip data-aos="fade-up" data-aos-delay="600" placement='bottom' className='shadow-2xl py-5 justify-center items-center px-3'>
//               <img src='./videography.jpg' alt='Image'/>
//               <div className='lg:px-3 md:px-3 sm:px-2'>
//                 <h1 className='text-white text-xl pt-5 font'>
//                   Videography
//                 </h1>
//                 <p className='text-[#747474] pt-3'>
//                   Videography: From concept development to post-production, our videography services help bring your vision to life in stunning detail.
//                 </p>
//               </div>
//             </Tooltip>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Post;


import React from 'react';

const Services = () => {
    return (
        <>
        <div className='justify-center mx-auto items-center pb-20 bg-gradient-to-t from-[#0D0D0D] via-[#000] to-[#0D0D0D]'>
            <div className='text-white mx-auto justify-center items-center md:px-10 px-5 max-w-screen-2xl'>
                <div className='md:border-b-2 md:border-[#18C4FF] md:border-opacity-30 md:pt-28 pb-5 pt-14'>
                    <div className='max-w-screen-md mx-auto justify-center text-center overflow-hidden items-center'>
                        <p className='first text-[#18C4FF] font-bold'>
                            Services Overview
                        </p>
                        <h1 className='lg:text-4xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Comprehensive Digital Solutions
                        </h1>
                        <p className='text-[#747474] lg:pt-3 pt-5 pb-10'>
                            At HavreHands, we understand that no two businesses are alike, which is why we offer a diverse range of services tailored to meet the unique needs of our clients. From building stunning websites to crafting compelling social media campaigns, our team of experts is dedicated to helping you achieve your goals and stand out in today's competitive digital landscape.
                        </p>
                    </div>
                    <div className='border-b border-[#18C4FF] border-opacity-30 border-4 block md:hidden xl:hidden lg:hidden mx-16'/>
                </div>
                <div className='justify-center md:py-10 items-center'>
                    <div className='justify-center w-full mx-auto text-[#fff]'>
                        <p data-aos="fade-up" data-aos-delay="200" className='md:text-xl text-base text-[#18C4FF] uppercase lg:pt-10 pt-10'>
                            Our services include:
                        </p>
                        <div className='md:grid grid-cols-2 md:gap-x-10 justify-between mx-auto mt-3 hover:text-white text-[#999]'>
                            <div className='md:py-10 hover:bg-[#01375D] duration-200 border-opacity-40 py-5 border-b border-[#18C4FF] hover:translate-y-1 hover:px-5 cursor-pointer'>
                                <h1 className='font-semibold xl:text-4xl lg:text-3xl text-white text-2xl border-b border-[#18C4FF]'>
                                    Web <br className='hidden md:block'/> Development
                                </h1>
                                <p className='md:text-base text-sm pt-8'>
                                    From custom designs to responsive interfaces, we create websites that not only look great but also drive results.
                                </p>
                            </div>
                            <div className='md:py-10 hover:bg-[#01375D] duration-200 border-opacity-40 py-5 border-b border-[#18C4FF] hover:translate-y-1 hover:px-5 cursor-pointer'>
                                <span className='font-semibold xl:text-4xl lg:text-3xl text-white text-2xl border-b border-[#18C4FF]'>
                                    Social <br className='hidden md:block'/> Media Marketing
                                </span>
                                <p className='md:text-base text-sm pt-8'>
                                    We develop strategic campaigns and create engaging content to help you connect with your audience and grow your brand.
                                </p>
                            </div>
                            <div className='md:py-10 hover:bg-[#01375D] duration-200 border-opacity-40 py-5 border-b border-[#18C4FF] hover:translate-y-1 hover:px-5 cursor-pointer'>
                                <span className='font-semibold xl:text-4xl lg:text-3xl text-white text-2xl border-b border-[#18C4FF]'>
                                    Search <br className='hidden md:block'/> Engine Optimization (SEO)
                                </span>
                                <p className='md:text-base text-sm pt-8'>
                                    Our comprehensive SEO services are designed to improve your online visibility and drive organic traffic to your website.
                                </p>
                            </div>
                            <div className='md:py-10 hover:bg-[#01375D] duration-200 border-opacity-40 py-5 border-b border-[#18C4FF] hover:translate-y-1 hover:px-5 cursor-pointer'>
                                <span className='font-semibold xl:text-4xl lg:text-3xl text-white text-2xl border-b border-[#18C4FF]'>
                                    Photography
                                </span>
                                <p className='md:text-base text-sm pt-8'>
                                    Our professional photographers capture stunning images that showcase your brand in the best possible light.
                                </p>
                            </div>
                        </div>
                        <div className='md:py-16 hover:bg-[#01375D] duration-200 hover:text-white text-[#999] border-opacity-40 py-5 border-b border-[#18C4FF] hover:translate-y-1 hover:px-5 cursor-pointer'>
                            <span className='font-semibold xl:text-4xl lg:text-3xl text-white text-2xl border-b border-[#18C4FF]'>
                                Videography
                            </span>
                            <p className='md:text-base text-sm pt-8'>
                                From concept development to post-production, our videography services help bring your vision to life in stunning detail.
                            </p>
                        </div>
                        <div className='justify-center mx-auto w-full bg-[#101010] px-5 md:mt-10 mt-5'>
                            <div className='text-[#747474] max-w-screen-xl mx-auto justify-center md:py-20 py-10 text-center md:text-xl text-xs'>
                                <p>
                                No matter your digital marketing needs, you can trust HavreHands to deliver exceptional results that help your business thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Services;