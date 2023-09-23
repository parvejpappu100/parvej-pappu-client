import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])


    return (
        <div className='bg-[#F9FAFB] my-32'>
            <div className='px-4 max-w-[1120px] mx-auto py-32'>
                <SectionTitle title={"Testimonial"} subTitle={"Client's Review"}></SectionTitle>
                <div className='mt-32'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                            <div className='p-6 bg-white h-[300px] shadow'>

                                <div className=''>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={testimonial.rating}
                                        readOnly
                                    />
                                    <p className='italic mt-3'>"{testimonial.details}"</p>
                                </div>
                            </div>
                            <div className='flex flex-col mt-5 gap-4 items-center text-center'>
                                <img className='w-[60px] h-[60px] rounded-full' src={testimonial.img} alt="" />
                                <div>
                                    <h3 className='font-semibold '>{testimonial.name}</h3>
                                    <p>{testimonial.from}</p>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;