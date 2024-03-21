import React from 'react';

const How = () => {
    return (
        <>
        <div className='justify-center mx-auto items-center pb-20 bg-[#0D0D0D]'>
            <div className='text-white mx-auto justify-center items-center md:px-10 px-2 max-w-screen-2xl'>
                <div className='md:border-b-2 md:border-[#18C4FF] md:border-opacity-30 md:pt-28 pb-5 pt-14'>
                    <div className='max-w-screen-md mx-auto justify-center text-center overflow-hidden items-center'>
                        <p className='first text-[#18C4FF] font-bold'>
                            How We Work
                        </p>
                        <h1 className='lg:text-4xl md:text-4xl sm:text-4xl text-2xl mx-auto text-[#fff] lg:py-5 py-2'>
                            Our Proven Process for Success
                        </h1>
                        <p className='text-[#747474] lg:pt-3 pt-5 pb-10'>
                            At HavreHands, we believe that success is built on collaboration, transparency, and a relentless commitment to excellence. Our proven process ensures that every project we undertake is executed with precision and efficiency, delivering outstanding results for our clients time and time again.
                        </p>
                    </div>
                    <div className='border-b border-[#18C4FF] border-opacity-30 border-4 block md:hidden xl:hidden lg:hidden mx-16'/>
                </div>
                <div className='justify-center md:py-10 py-5 items-center'>
                    <div className='px-4'>
                        <p data-aos="fade-up" data-aos-delay="200" className='md:text-xl text-base text-[#18C4FF] uppercase lg:py-10 py-10'>
                            Our process includes:
                        </p>
                        <div className='md:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto text-center justify-center max-w-screen-2xl overflow-hidden'>
                            <div data-aos="fade-up" data-aos-delay="200" className='bg-[#09121C] border-[#18C4FF] justify-center mx-auto text-center border shadow-inherit hover:bg-[#01375D] text-[#747474] hover:text-white py-5 px-5 cursor-wait md:mt-0 mt-5 '>
                                <img className='xl:w-full lg:w-28 w-28 justify-center mx-auto text-center' src='./Web-development.png' alt='logo'/>
                                <h1 className='lg:text-base font-semibold justify-center lg:pt-5 pt-3'>
                                    Initial Consultation
                                </h1>
                                <p className='py-3 lg:text-sm text-sm xl:text-base'>
                                    We start by getting to know you and your business, understanding your goals, objectives, and challenges.
                                </p>
                            </div>
                            <div data-aos="fade-buttom" data-aos-delay="300" className='bg-[#09121C] border-[#18C4FF] justify-center mx-auto text-center border shadow-inherit hover:bg-[#01375D] text-[#747474] hover:text-white py-5 px-5 cursor-wait md:mt-0 mt-5 '>
                                <img className='xl:w-full lg:w-28 w-28 justify-center mx-auto text-center' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='lg:text-base font-semibold justify-center lg:pt-5 pt-3'>
                                    Strategic Planning
                                </h1>
                                <p className='py-3 lg:text-sm text-sm xl:text-base'>
                                    Based on our initial consultation, we develop a customized strategy tailored to meet your specific needs and objectives.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className='bg-[#09121C] border-[#18C4FF] justify-center mx-auto text-center border shadow-inherit hover:bg-[#01375D] text-[#747474] hover:text-white py-5 px-5 cursor-wait md:mt-0 mt-5 '>
                                <img className='xl:w-full lg:w-28 w-28 justify-center mx-auto text-center' src='./Social Media Marketing.png' alt='logo'/>
                                <h1 className='lg:text-base font-semibold justify-center lg:pt-5 pt-3'>
                                    Implementation
                                </h1>
                                <p className='py-3 lg:text-sm text-sm xl:text-base'>
                                With a solid strategy in place, we roll up our sleeves and get to work, leveraging the latest technologies and techniques to bring your vision to life.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="500" className='bg-[#09121C] border-[#18C4FF] justify-center mx-auto text-center border shadow-inherit hover:bg-[#01375D] text-[#747474] hover:text-white py-5 px-5 cursor-wait md:mt-0 mt-5 '>
                                <img className='xl:w-full lg:w-28 w-28 justify-center mx-auto text-center' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='lg:text-base font-semibold justify-center lg:pt-5 pt-3'>
                                    Monitoring and Optimization
                                </h1>
                                <p className='py-3 lg:text-sm text-sm xl:text-base'>
                                    We continuously monitor performance, track key metrics, and optimize your campaign to ensure that it delivers the best possible results.
                                </p>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600" className='bg-[#09121C] border-[#18C4FF] justify-center mx-auto text-center border shadow-inherit hover:bg-[#01375D] text-[#747474] hover:text-white py-5 px-5 cursor-wait md:mt-0 mt-5 '>
                                <img className='xl:w-full lg:w-28 w-28 justify-center mx-auto text-center' src='./Digital-Marketing.png' alt='logo'/>
                                <h1 className='lg:text-base font-semibold justify-center lg:pt-5 pt-3'>
                                    Reporting and Analysis
                                </h1>
                                <p className='py-3 lg:text-sm text-sm xl:text-base'>
                                    Finally, we provide detailed reports and analysis, giving you insight into the performance of your campaign and the return on your investment.
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

export default How;