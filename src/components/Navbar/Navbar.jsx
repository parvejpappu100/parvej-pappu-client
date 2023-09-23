import React, { useState } from 'react';
import { Element, Link } from 'react-scroll';
import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr, TbBrandLinkedin } from "react-icons/tb";
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';



const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');

    const navOption = <>
        <li><Link style={activeLink === 'home' ? { color: '#F59E0B', backgroundColor: 'white' } : {}}
            className='hover:text-[#F59E0B] hover:bg-white'
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('home')} >Home</Link></li>
        <li><Link style={activeLink === 'about' ? { color: '#F59E0B', backgroundColor: 'white' } : {}}
            className='hover:text-[#F59E0B] hover:bg-white'
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('about')}>About</Link></li>
        <li><Link style={activeLink === 'services' ? { color: '#F59E0B', backgroundColor: 'white' } : {}}
            className='hover:text-[#F59E0B] hover:bg-white'
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('services')}>Services</Link></li>
        <li><Link style={activeLink === 'skills' ? { color: '#F59E0B', backgroundColor: 'white' } : {}}
            className='hover:text-[#F59E0B] hover:bg-white'
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('skills')}>Skill</Link></li>
        <li><Link style={activeLink === 'portfolio' ? { color: '#F59E0B', backgroundColor: 'white' } : {}}
            className='hover:text-[#F59E0B] hover:bg-white'
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('portfolio')}>Portfolio</Link></li>
        <li><Link>Testimonial</Link></li>
        <li><Link>Contact</Link></li>
    </>

    return (
        <div>
            <div className='sticky top-0 z-50 bg-white'>
                <div className="navbar max-w-[1120px] mx-auto lg:my-8 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navOption}
                            </ul>
                        </div>
                        <a className="cursor-pointer uppercase text-2xl font-bold">
                            PA<span className='text-[#F59E0B]'>PP</span>U.
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                            {navOption}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex gap-2 items-center'>
                            <BiLogoUpwork className='bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700'></BiLogoUpwork>
                            <TbBrandFiverr className='bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700'></TbBrandFiverr>
                            <TbBrandLinkedin className='bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700'></TbBrandLinkedin>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Element name="home" className="section">
                    <Banner></Banner>
                </Element>
                <Element name="about" className="section">
                    <About></About>
                </Element>
                <Element name="services" className="section">
                    <Services></Services>
                </Element>
                <Element name="skills" className="section">
                    <Skills></Skills>
                </Element>
                <Element name="portfolio" className="section">
                    <Projects></Projects>
                </Element>
            </div>
        </div>
    );
};

export default Navbar;