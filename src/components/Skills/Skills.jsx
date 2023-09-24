import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaDownload } from 'react-icons/fa';
import ResumePDF from "../../assets/resume/Resume of Parvej Hasan.pdf"
import useAuth from '../hooks/useAuth';

const Skills = () => {

    const { themeBlack } = useAuth();

    return (
        <div className={themeBlack == true ? "bg-[#0F172A] duration-700 text-[#94A3B8]" : "bg-[#F9FAFB]  duration-700"}>
            <div className='max-w-[1120px] mx-auto py-32 px-4'>
                <SectionTitle title={"Skills"} subTitle={"My Skill"}></SectionTitle>
                <div className='mt-24'>
                    <div>
                        <div className={themeBlack == true ? "flex flex-col lg:flex-row justify-between items-center shadow hover:shadow-lg duration-700 bg-[#1E293B] py-10 rounded-md" : "flex flex-col lg:flex-row justify-between items-center shadow hover:shadow-lg duration-700 bg-white py-10 rounded-md"}>
                            <div className=' px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Diploma in Computer Science</h4>
                                <p className='my-4'>Dhaka Polytechnic Institute (2021 - present)</p>
                                <p className='mb-5'>I am studying Computer Science and Technology at Dhaka Polytechnic Institute .</p>
                            </div>
                            <div className='px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Certified by Programming Hero</h4>
                                <p className='my-4'>Complete Web Development Course (Six Month)</p>
                                <p className='mb-5'>I have completed web development course from programming hero.</p>
                            </div>
                            <div className='px-10 w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Secondary School Education</h4>
                                <p className='my-4'>Bright Star Kinder Garden And Model School (2009 - 2021)</p>
                                <p className='mb-5'>I have completed my secondary school edudcation form Bright Star Kinder Garden And Model School.</p>
                            </div>
                        </div>
                        <div className={themeBlack == true ? "flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center shadow hover:shadow-lg duration-700 bg-[#1E293B] py-10 rounded-md my-10" : "flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center shadow hover:shadow-lg duration-700 bg-white py-10 rounded-md my-10"}>
                            <div className=' px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold mb-4 text-white duration-700" : "duration-700 text-xl font-semibold mb-4"}>Front-End</h4>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>React</p>
                                    <hr className='w-full' />
                                    <p>90%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>Tailwind/DaisyUI</p>
                                    <hr className='w-full' />
                                    <p>95%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>Bootstrap</p>
                                    <hr className='w-full' />
                                    <p>80%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>JavaScript</p>
                                    <hr className='w-full' />
                                    <p>75%</p>
                                </div>
                            </div>
                            <div className='px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold mb-4 text-white duration-700" : "duration-700 text-xl font-semibold mb-4"}>Back-End</h4>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>Express</p>
                                    <hr className='w-full' />
                                    <p>80%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>MongoDb</p>
                                    <hr className='w-full' />
                                    <p>80%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>JWT</p>
                                    <hr className='w-full' />
                                    <p>80%</p>
                                </div>
                                <div className='flex w-full items-center gap-5 '>
                                    <p>Node</p>
                                    <hr className='w-full' />
                                    <p>50%</p>
                                </div>
                            </div>
                            <div className='px-10 w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold mb-4 text-white duration-700" : "duration-700 text-xl font-semibold mb-4"}>Tools</h4>
                                <h5>GitHub</h5>
                                <h5>Chrome Dev Tool</h5>
                                <h5>Firebase</h5>
                                <h5>Figma , Netlify , Vercel , Dotenv</h5>
                            </div>
                        </div>
                        <div className={themeBlack == true ? "flex flex-col lg:flex-row justify-between items-center shadow hover:shadow-lg duration-700 bg-[#1E293B] py-10 rounded-md" : "flex flex-col lg:flex-row justify-between items-center shadow hover:shadow-lg duration-700 bg-white py-10 rounded-md"}>
                            <div className=' px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Communication</h4>
                                <p className='my-4'>I prioritize effective communication as a core skill. Clear and concise messaging, coupled with active listening, enable me to build strong connections and facilitate understanding in professional interactions.</p>
                            </div>
                            <div className='px-10 border-e w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Collaboration</h4>
                                <p className='my-4'>Collaboration is integral to my work approach. I excel in team environments, sharing responsibilities, and fostering a cooperative atmosphere to achieve shared goals.</p>
                            </div>
                            <div className='px-10 w-full'>
                                <h4 className={themeBlack == true ? "text-xl font-semibold text-white duration-700" : "duration-700 text-xl font-semibold"}>Time management</h4>
                                <p className='my-4'>I am dedicated to efficient time management. My meticulous planning ensures tasks are prioritized effectively, deadlines are met consistently, and quality work is delivered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 flex justify-center'>
                    <a href={ResumePDF}
                        download="Resume of Parvej Hasan Pappu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className={themeBlack == true ? "btn bg-[#302B26] text-[#F59E0B] normal-case text-base px-6 rounded-md hover:bg-[#F59E0B] hover:text-white  duration-1000 border border-[#7a7060] hover:border-[#F59E0B]  font-bold" : "btn bg-[#FDF0DB] text-[#F59E0B] normal-case text-base px-6 rounded-md hover:bg-[#F59E0B] hover:text-white  duration-1000 border border-[#e2ceac]  font-bold"}>
                            Download Resume
                            <FaDownload></FaDownload>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Skills;