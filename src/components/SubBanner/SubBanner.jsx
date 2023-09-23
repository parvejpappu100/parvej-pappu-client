import React from 'react';
import bannerPhoto from "../../assets/images/aboutPhoto.jpg";
import "./SubBanner.css"

const SubBanner = () => {
    return (
        <div className='bg-img' >
            <div className='bg-black bg-opacity-80 py-24 '>
                <div className='max-w-[600px]  mx-auto text-center px-4'>
                    <h3 className='text-2xl font-semibold text-white'>I Am Available For Freelancer Projects.</h3>
                    <p className='text-gray-300 my-5'>Let's collaborate and transform your ideas into remarkable web experiences that leave a lasting impression.</p>
                    <button className="btn bg-[#F59E0B] text-white normal-case text-base px-6 rounded-md hover:bg-[#D97706]  duration-1000 border-none font-bold">
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;