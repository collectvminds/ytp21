import React from 'react';
import ig from '../../Assets/instagram.png'
import tw from '../../Assets/twitter_w.png'
import open from '../../Assets/opensea_w.png'
import dc from '../../Assets/discord.png'
import eth from '../../Assets/ethereum_w.png'
import logo from '../../Assets/9.png'

const Footer = () => {
    return (
        <div className='bg-liteDarkBg py-14 min-h-[30vh]'>
            <div className="footerWrapper px-10 max-w-[1700px] mx-auto mobile:overflow-hidden ">

                <footer className="footer footer-center p-10 bg-transparent " data-aos="fade-up">

                    <img src={logo} className='w-10' alt="logo" />


                    <div className="grid laptop:grid-flow-col desktop:grid-flow-col mobile:grid-flow-row gap-4 text-white">
                        <a href='/' className="link link-hover hover:text-primaryBg">Home</a>                        
                        <a href='/collections' className="link link-hover hover:text-primaryBg">Explore collection</a>
                        <a href='/#aboutUs' className="link link-hover hover:text-primaryBg">About You, the People!</a>
                        <a href='/#how' className="link link-hover hover:text-primaryBg">The AI in action</a>
                        <a href='/#plan' className="link link-hover hover:text-primaryBg">Roadmap</a>
                        <a href='/#donate' className="link link-hover hover:text-primaryBg">Get involved</a>
                        <a href='/#team' className="link link-hover hover:text-primaryBg">The team</a>

                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-4 text-white hover:cursor-pointer items-center">
                            <a href='https://twitter.com/collectvminds' target="_blank" rel="noopener noreferrer">
                                <img src={tw} className='w-6' alt="twitter" title='twitter'/>
                            </a>

                            <a href='https://opensea.io/collection/you-the-people' target="_blank" rel="noopener noreferrer">
                                <img src={open} className='w-6' alt="opensea" title='opensea'/>
                            </a>

                            <a href='https://www.instagram.com/collectvminds/' target="_blank" rel="noopener noreferrer">
                                <img src={ig} className='w-6' alt="instagram" title='instagram'/>
                            </a>

                            <a href='https://discord.gg/x6QFgg4tXB' target="_blank" rel="noopener noreferrer">
                                <img src={dc} className='w-6' alt="discord" title='discord'/>
                            </a>
                            <a href='https://etherscan.io/address/0x6b5ccc5eb0647b85c195d10d33c1fe0603987418' target="_blank" rel="noopener noreferrer">
                                <img src={eth} className='w-6' alt="etherscan" title='smart contract'/>
                            </a>
                            
                        </div>
                    </div>
                    <div>
                        <p className='text-textGray'>Copyright © {new Date().getFullYear()} - All right reserved by Collective Minds</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;