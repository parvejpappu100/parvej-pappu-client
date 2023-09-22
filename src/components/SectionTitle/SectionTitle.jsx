import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='text-center'>
            <div className='flex  gap-3 items-center justify-center'>
                <div className='bg-[#F59E0B] p-2 w-2 h-2 rounded-full'></div>
                <h5 className='text-xl  '>{title}</h5>
            </div>
            <h3 className='text-2xl md:text-4xl font-bold uppercase mt-5'>{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;