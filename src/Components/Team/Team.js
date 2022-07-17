import React from 'react';
import avatar from '../../Assets/avatar.png'
import twitter from '../../Assets/p4_twitter.png'
import linkedin from '../../Assets/p4_linkedin.png'
import tech from '../../Assets/tech.png'


const Team = () => {



return (

    
<div className='bg-white py-14 min-h-[50vh]'  id='team'>
    <div className="donationWrapper px-10 max-w-[960px] mx-auto ">
        <div className="content grid laptop:grid-cols-1 desktop:grid-cols-1 mobile:grid-cols-1 mobile:overflow-hidden" >

            <div className="right flex flex-col justify-start items-left" data-aos="fade-up">
                <div className="grid grid-rows-1">
                    <p className='text-Dark text-4xl font-extrabold py-5 '>The team</p>
                </div>

              
                <div className="contentText text-Dark flex flex-col justify-start items-left">
                    <img class="mb-6 w-20" src={avatar} alt="avatar"/>
                    <h5 class="text-lg font-bold mb-4">Fabio Hofer</h5>
                    <ul class="list-inside flex">
                        <a href="https://twitter.com/FabioHofer" target="_blank" rel="noopener noreferrer" class="px-2">
                            <img src={twitter} className='w-6' alt="twitter"/>
                        </a>
                        <a href="https://www.linkedin.com/in/fabiohofer/" target="_blank" rel="noopener noreferrer" class="px-2">
                            <img src={linkedin} className='w-6' alt="avatar"/>
                        </a>
                        
                    </ul>
                    <p className=' text-Dark text-xl text-left my-3'>Fabio is an Oxford graduate in Software Engineering with extensive experience in IT projects. In 2021 he took a break from his career to study blockchain technology and artificial intelligence. This study, combined with his interest in concepts of the collective unconsciousness by Carl Jung, the Zeitgeist from 18th Century German Philosophy and the Akashic Record by the ancient Hindu sages of the Himalayas gave origin to Collective Minds and the You, The People! collection. </p>
                </div>
                <p className='text-Dark text-4xl font-extrabold pt-24'>Our technology</p>
                <img class="pt-10 mb-6 mx-auto" src={tech} alt="avatar"/>
            </div>
        </div>
    </div>


    



</div>



    );
};

export default Team;