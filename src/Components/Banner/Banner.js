import React from 'react';
import './Banner.css'
import Navbar from '../Navbar';
import video from '../../Assets/v20.mp4'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate()


    return (
        <div className='bannar-wrapper text-white'>
            <Navbar />

            <video className='bannerVideo' src={video}
                autoPlay muted loop playsInline></video>

            <div className="hero min-h-[100vh] max-h-auto max-w-[1700px] mx-auto">
                <div className="hero-content py-10 desktop:px-40 ">
                    <div className='mobile:pt-20' data-aos="fade-up">
                        <h1 className="laptop:text-5xl desktop:text-5xl mobile:text-4xl font-bold">The world,
                            <br />imagined ​by AI.</h1>

                        <p className="py-20 laptop:text-3xl desktop:text-3xl mobile:text-xl font-light">

                            In December 2021 we asked an artificial intelligence to create art
                            representing its own thoughts about humanity.  <br /> <br /> <br />

                            These extraordinary images of our world are now available as the digital art collection "You, the People!".
                        </p>


                        <button type="button" className="w-70 text-white rounded-lg bg-transparent focus:outline-none text-lg font-normal px-5 py-2.5 border-2 border-white text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:border-Dark"
                            onClick={() => navigate('/collections')}
                        >Explore collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;