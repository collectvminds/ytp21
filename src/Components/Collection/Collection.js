import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './Collection.css'
import img1 from '../../Assets/18.png'
import img2 from '../../Assets/19.png'
import img3 from '../../Assets/20.png'
import Loading from '../Loading/Loading';
import SingleCollection from '../SingleCollection/SingleCollection';
import { memo } from 'react';
import { useContext } from 'react';
import { ChainContext } from '../Context/BlockchainContext';
import { ethers } from 'ethers';
import { nftContractAddress } from '../Config/Config';
const contractABI = require("../Abi/abi.json");


const Collection = ({ collection, loading }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const { wallet, checkIfSold} = useContext(ChainContext);
    //new
    const [currentSupply, setCurrentSupply] = useState('');

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
        nftContractAddress,
        contractABI,
        signer
        );
        
        async function handleSupply() {
        const result = await contract.totalSupply();
        setCurrentSupply(result.toString());
        };
        handleSupply();
        console.log ("Current supply: ",currentSupply );
        //end new        

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [wallet]);

    if (collection.length === 0 || loading) {
        return <Loading />
    }

    
    return (
        <div className='collection-wrapper bg:white'>
            <div className="collection_video_titile bg-white text-white">
                <Navbar />

                <div className="collection min-h-[105vh] max-h-auto max-w-[3000px] mx-auto bg-hero-collection bg-cover text-white">
                    <div className="collection-content mobile:pt-40 tablet:pt-40 desktop:pt-60 mobile:px-10">
                        <div data-aos="fade-up">
                            <h1 className="laptop:text-5xl desktop:text-5xl mobile:text-4xl font-bold">You​, the people!</h1>

                            <p className='py-20 laptop:text-3xl desktop:text-3xl mobile:text-xl font-light'> A portrait of the world we live in. 
                            <br/><br/>Represented with the objectivity of artificial intelligence.</p>
                        </div>

                    </div>
                    
                </div>
   
            </div>

            <div className="collectionBox bg-Dark h-auto py-10 pt-20 mx-auto ">
                <div className="boxContainer max-w-[1200px] mx-auto flex laptop:flex-nowrap desktop:flex-nowrap laptop:flex-row desktop:flex-row mobile:flex-col mobile:flex-wrap justify-evenly items-center">
                    <div className="card card-1 bg-deepDarkBg m-10 border-0" data-aos="fade-right">
                        <div className="card-body text-center ">
                            <img src={img1} className="block mx-auto w-14" alt="logo" />
                            <p className=' flex justify-center items-center text-white'>250 countries, territorries and dependencies from across the world represented</p>
                        </div>
                    </div>
                    <div className="card card-3 bg-deepDarkBg m-10 border-0" data-aos="fade-right">
                        <div className="card-body text-center">
                            <img src={img3} className="block mx-auto w-14" alt="logo" />
                            <p className=' flex justify-center items-center text-white'>Total images created: 750  <br /> Total images sold: {currentSupply} </p>
                        </div>
                    </div>
                    <div className="card card-2 bg-deepDarkBg m-10 border-0" data-aos="fade-right">
                        <div className="card-body text-center">
                            <img src={img2} className="block mx-auto w-14" alt="logo" />
                            <p className=' flex justify-center items-center text-white'>All images were created by AI and published without editing or re-touches. ISO-3116 country code and year were added programatically to each image</p>
                        </div>
                    </div>

                </div>

            </div>


              <section className="collectionSection bg-white">
                <div className="max-w-[1400px] bg-white mx-auto text-textGray py-20 px-10">
                    <div className="collectionCards bg-white grid grid-cols-1 gap-y-7">
                        {
                            collection.map((arr, index) =>
                                <SingleCollection
                                    key={index}
                                    data={arr}
                                    scrollPositon={scrollPosition}
                                    checkIfSold={checkIfSold}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default memo(Collection);