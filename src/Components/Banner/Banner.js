import React from 'react';
import './Banner.css'
import Navbar from '../Navbar';
import video from '../../Assets/v8.mp4'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate()


    return (
        <div className='bannar-wrapper text-white'>
            <Navbar />

            <video className='bannerVideo brightness-50' src={video}
                autoPlay muted loop playsInline></video>

            <div className="hero min-h-[100vh] max-h-auto max-w-[900px] mx-auto">
                <div className="hero-content py-10 desktop:px-40 ">
                    <div className='mobile:pt-10 laptop:pt-20' data-aos="fade-up">
                        <h1 className="laptop:text-3xl desktop:text-5xl mobile:text-3xl font-bold">The world,
                            <br />imagined ​by AI.</h1>

                        <p className="py-20 laptop:text-2xl desktop:text-2xl mobile:text-xl font-normal">

                            In December 2021 we asked an artificial intelligence to create art
                            representing its own thoughts about humanity.  <br /> <br /> <br />

                            These extraordinary images of our world are now available as the digital art collection "You, the People!".
                        </p>


                        <button type="button" className="w-70 text-lg font-bold text-center mr-2 mb-2 px-5 py-2.5 border-2 border-white rounded-lg hover:bg-white hover:text-deepDarkBg"
                            onClick={() => navigate('/collections')}
                        >Explore collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;