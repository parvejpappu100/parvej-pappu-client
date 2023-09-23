import React from 'react';
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='bg-black mt-24'>
            <footer className=" lg:container mx-auto footer py-24 px-4  text-neutral-content">
                <aside>
                    <h3 className='uppercase text-2xl font-bold text-white'>PA<span className='text-[#F59E0B]'>PP</span>U.</h3>
                    <p className='text-white font-medium'>Parvej Hasan Pappu<br />MERN Stack Developer | Building Next-Level Web Solutions</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className='flex gap-4 text-xl'>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000'>
                            <a href="https://www.upwork.com/freelancers/~0138d7aea07a92ac8a" target='_blank'><BiLogoUpwork></BiLogoUpwork></a>
                        </div>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000'>
                            <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><TbBrandFiverr></TbBrandFiverr></a>
                        </div>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000'>
                            <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                        </div>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000' >
                            <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                        </div>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000'>
                            <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                        </div>
                        <div className=' bg-[#192132] text-white p-1 rounded-md  hover:bg-[#F59E0B] shadow-md duration-1000'>
                            <a href="https://www.instagram.com/parvejhasanpappu100/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center py-10 px-4 text-white border-t border-gray-400">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Parvej Hasan Pappu</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;