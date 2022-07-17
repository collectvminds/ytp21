import React from 'react';
import './Donation.css'
import { useContext } from 'react';
import { ChainContext } from '../Context/BlockchainContext';

const Donation = () => {



    const { donationHandle } = useContext(ChainContext)

    const handleDonation = (e) => {
        e.preventDefault()
        const amount = e.target.amount.value
        donationHandle(amount);
    }


    return (
        <div className='bg-white py-14 min-h-[50vh]'  id='donate'>
            <div className="donationWrapper px-10 max-w-[960px] mx-auto ">
                <div className="content grid laptop:grid-cols-1 desktop:grid-cols-1 mobile:grid-cols-1 mobile:overflow-hidden" >

                    <div className="right flex flex-col justify-center items-left" data-aos="fade-up">
                        <div className="grid grid-rows-1">
                            <p className='text-Dark text-4xl font-extrabold py-5 '>Get involved</p>
                        </div>
                        <div className="contentText text-Dark flex flex-col justify-center items-left">
                        <p className='text-Dark text-xl text-left  my-3'>The primary way to support the project is by purchasing one or more items from our collection. At the moment we only support the Ethereum cryptocurrency in this website. There are also artworks available in Opensea, and that will accept a number of payment methods. </p>
                        
                        <p className='text-Dark text-xl text-left  my-3'> The wallet button at the top of the page contains all the important information about crypto wallets and how to obtain one. Our preferred wallet is Metamask, and once you have it installed you can click on Buy to get some Ethereum. </p>

                            <p className='text-Dark text-xl text-left  my-3'>Not ready to get involved with NFTs, but still want to take part? Please make an anonymous donation to our project, and subscribe to our social media channels.</p>

                            <p className=' text-Dark text-xl text-left my-3'>Our objective is to understand the evolving perception that AI has of our world and make representations of this perception available to everyone. </p>

                            <p className=' text-Dark text-xl text-left my-3' >We are also reaching out to communities in the development world and facilitating our patrons involvement with local artists, volunteering and charity work.</p>

                            <p className=' pb-10 text-Dark text-xl text-left my-3 '>Your donation will help to create a platform where artists from all over the world can come together to work, earn and be heard.</p>


                            {/* <button type="checkbox" id="my-modal-3" className="modal-toggle w-52 text-white bg-primaryBg focus:outline-none text-lg font-bold px-5 py-2.5 border-2 border-primaryBg text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-transparent">Donate</button> */}

                            <label for="my-modal-3" class="btn modal-button mx-auto bg-Dark text-white">Donate</label>


                        </div>
                    </div>
                </div>
            </div>


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative bg-deepDarkBg text-white">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Please enter the donation amount</h3>
                    <form onSubmit={(e) => handleDonation(e)}>
                        <input type="number" step="0.01" name='amount' placeholder="Amount in ETH" class="input w-full max-w-full my-5 text-darkGray donationInput" required />

                        <button type="submit" className=" w-full  text-white rounded-lg bg-primaryBg focus:outline-none text-lg font-bold px-5 py-2.5 border-2 border-primaryBg text-center mr-2 mb-2 transition-all ease-in-out duration-300 hover:bg-transparent">Donate</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Donation;