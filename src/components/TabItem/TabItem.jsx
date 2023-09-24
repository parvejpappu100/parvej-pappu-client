import React, { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import useAuth from '../hooks/useAuth';

const TabItem = ({ project }) => {

    const { category, name, image } = project;
    const { themeBlack } = useAuth();

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div onClick={() => setShowModal(true)} className='relative mt-12 cursor-pointer'>
                <div className="relative max-w-full h-[450px] overflow-hidden ">
                    <div>
                        <img
                            src={image}
                            alt={name}
                            className=" object-cover object-top border rounded-md"
                        />
                    </div>
                </div>
                <div className='bg-black  opacity-0 hover:opacity-60 text-white absolute inset-0 bottom-0  flex justify-center items-center text-center transition-opacity duration-1000 p-5 rounded-md'>
                    <div>
                        <h3 className='text-2xl mb-3'>{name}</h3>
                        <p className='text-xl'>{category}</p>
                    </div>
                </div>
            </div>
            <div className={themeBlack == true ? "text-black" : ""}>
                <ProjectModal project={project} showModal={showModal} setShowModal={setShowModal}></ProjectModal>
            </div>
        </div>
    );
};

export default TabItem;