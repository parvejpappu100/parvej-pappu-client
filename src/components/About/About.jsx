import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutPhoto from "../../assets/images/aboutPhoto.jpg";
import { Link } from 'react-scroll';
import { FaRegCalendarCheck, FaRegCheckSquare, FaRegClock } from 'react-icons/fa';

const About = () => {
    return (
        <div className='max-w-[1120px] mx-auto my-32 px-4'>
            <SectionTitle title={"About Me"} subTitle={"Know me more"}></SectionTitle>
            <div className='flex flex-col lg:flex-row gap-12 items-center mt-32'>
                <div className='lg:w-3/4'>
                    <img className='rounded-full border ps-3 pt-3' src={aboutPhoto} alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex  gap-3 items-center'>
                        <div className='bg-[#F59E0B] p-2 w-2 h-2 rounded-full'></div>
                        <h5 className='text-xl  '>About Me</h5>
                    </div>
                    <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold my-5'>Turning Ideas into Digital Realities: Your Web Development Partner</h4>
                    <p className='my-8'>Hello, I'm a versatile MERN stack developer with a passion for crafting extraordinary web experiences. I excel in frontend and backend development, creating captivating user interfaces and robust server-side functionality. With expertise in HTML, CSS, and JavaScript, I build visually stunning and responsive websites. Let's collaborate to bring your vision to life and make an impact in the digital realm</p>
                    <p>Let's collaborate and transform your ideas into remarkable web experiences that leave a lasting impression.</p>
                    <div className='my-8 flex flex-col md:flex-row gap-5 md:gap-24'>
                        <div className='flex gap-2'>
                            <div>
                                <FaRegCalendarCheck className='text-5xl text-[#F59E0B]'></FaRegCalendarCheck>
                            </div>
                            <div>
                                <h5 className='text-xl font-bold '>45+ </h5>
                                <h5 className='text-xl font-semibold'>Complete Project</h5>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div>
                                <FaRegClock className='text-5xl text-[#F59E0B]'></FaRegClock>
                            </div>
                            <div>
                                <h5 className='text-xl font-bold '>1+ </h5>
                                <h5 className='text-xl font-semibold'>Years of experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row  md:gap-16 '>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#F59E0B]'></FaRegCheckSquare>
                                <h5>Extensive MERN Stack Proficiency</h5>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#F59E0B]'></FaRegCheckSquare>
                                <h5>Creative Front-End Expertise</h5>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#F59E0B]'></FaRegCheckSquare>
                                <h5>React.js Specialist</h5>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#F59E0B]'></FaRegCheckSquare>
                                <h5>Custom Web Application Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <Link to='' smooth={true} duration={1000}>
                            <button className="btn bg-[#FDF0DB] text-[#F59E0B] normal-case text-base px-6 rounded-md hover:bg-[#F59E0B] hover:text-white  duration-1000 border border-[#e2ceac] font-bold ">
                                See Work
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;