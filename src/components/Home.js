import React from "react";
import img2 from '../assets/img2.png';
import '../Home.css';

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29] ' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='md:hidden flex  order-first md:order-last relative flex flex-center justify-center'>
                        <img src={img2} alt="" className=' w-3/4 mx-60 my-18' />
                    </div>
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>NIHAL ALI</h1>
                        <p className='md:w-96 font-bold text-xl'>SOFTWARE DEVELOPER</p>

                        <div className='mt-5'>
                            <a href='https://drive.google.com/file/d/14I51JQNfE223CbwMxZdgTAUEnkiqz-eo/view?usp=sharing' target="_blank">
                                <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white'>RESUME</button>
                            </a>
                        </div>

                    </div>
                    {/* img */}
                    <div className=' hidden lg:flex order-first md:order-last relative'>
                        <img src={img2} alt="" className=' imgp w-3/4 mx-60 my-18  ' />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;