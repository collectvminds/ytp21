import React from 'react';
import video from '../../Assets/Home.mp4'
import Steps from '../Steps/Steps';

const How = () => {
    return (

        <div className='bg-white' id='how'>

            <div className="mx-auto max-w-[800px]">
                <p className='py-10 px-10 text-Dark text-4xl text-left font-bold'>The AI in action</p>
                <p className='text-Dark px-10 font-normal text-left text-xl'>
                    This example shows the process to generate an image. <br /> <br /> It's surprisingly similar to the human imagination process. <br />
                </p>

                <div className="video px-10 pt-10">
                    <video className="embed-responsive-item-16by9 rounded-lg w-600" loop muted autoPlay="autoplay"
                        playsInline __idm_id__="450562" src={video} data-aos="fade-up"></video>
                </div>
                <Steps />
            </div>
        </div>

    );
};

export default How;