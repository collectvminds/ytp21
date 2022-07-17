import React from 'react';
import './Steps.css'
import logo1 from '../../Assets/31.png'
import logo2 from '../../Assets/29.png'
import logo3 from '../../Assets/30.png'
import { useNavigate } from 'react-router-dom';

const Steps = () => {

    const navigate = useNavigate()


    return (
        <>
            <div className=" howSteps px-10 py-5 mx-auto max-w-[960px] flex laptop:flex-row desktop:flex-row mobile:flex-col justify-evenly items-center" >
                <div className="card card-1 bg-deepDarkBg" data-aos="fade-right">
                    <div className="card-body text-center" d>
                        <img src={logo1} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-white text-xl font-bold ">Text prompt</h2>
                        <p className='text-textGray text-sm'>The sentence "The countryside in England in a sunny day with a castle in the background" was submitted to the AI.</p>
                    </div>
                </div>
                <div className="card card-2 bg-deepDarkBg laptop:mx-10 desktop:mx-10 mobile:my-10" data-aos="fade-right">
                    <div className="card-body text-center">
                        <img src={logo2} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-white text-xl font-bold ">Image seed</h2>
                        <p className='text-textGray text-sm'>The AI starts to work by generating a seed image that contains just noise - similar to what we see in our TV when it is receiving no signal.</p>
                    </div>
                </div>
                <div className="card card-3 bg-deepDarkBg" data-aos="fade-right">
                    <div className="card-body text-center"  >
                        <img src={logo3} className="block mx-auto w-10" alt="logo" />
                        <h2 className="text-white text-xl font-bold ">Multiple Iterations</h2>
                        <p className='text-textGray text-sm'>The AI makes small changes to the image and asks itself "does it look like the text given to me?". This is iterated hundreds of times.</p>
                    </div>
                </div>
            </div>
            <div className="button flex justify-center items-center w-full pb-16">
                <a rel='noreferrer' target={"_blank"} href="https://www.researchgate.net/publication/360062594_VQGAN-CLIP_Open_Domain_Image_Generation_and_Editing_with_Natural_Language_Guidance">
                    <button type="button" className="w-70 text-Dark rounded-lg bg-transparent focus:outline-none text-lg font-bold px-5 py-2.5 border-2 border-Dark text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-Dark hover:border-white hover:text-white" data-aos="fade-up">Learn More </button>
                </a>


            </div>
        </>
    );
};

export default Steps;