import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [sending, setSending] = useState(false);
    const { themeBlack } = useAuth();

    const onSubmit = async (data) => {
        setSending(true);
        try {
            await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            reset();
            setSending(false);
            Swal.fire(
                'Thank You!',
                'I will response your message as soon as possible!',
                'success'
            )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: error.message
            })
            setSending(false)
        }
    }

    return (
        <div className={themeBlack == true ? "bg-[#1E293B]  duration-700 text-[#94A3B8]" : "bg-white duration-700"}>
            <div className='max-w-[1120px] mx-auto py-32'>
                <SectionTitle title={"Contact Me"} subTitle={"GET IN TOUCH"}></SectionTitle>
                <div className='mt-24 px-4'>
                    <div className='flex flex-col md:flex-row-reverse gap-10 px-2 lg:px-0'>
                        <div className='text-xl '>
                            <h3 className={themeBlack == true ? "text-2xl font-semibold uppercase duration-700 text-white" : "text-2xl font-semibold uppercase duration-700"}>Address</h3>
                            <p className='my-4'>Dhaka , Bangladesh</p>
                            <div className='flex items-center gap-4 my-4'>
                                <div>
                                    <FaEnvelope></FaEnvelope>
                                </div>
                                <p>parvejhasanpappu100@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div>
                                    <FaPhoneAlt></FaPhoneAlt>
                                </div>
                                <p>01974190770 (What's Up , Telegram) <br /> 01608190770</p>
                            </div>
                            <div>
                                <h3 className={themeBlack == true ? "text-2xl font-semibold mb-4 duration-700 text-white" : "text-2xl font-semibold mb-4 duration-700"}>Follow Me</h3>
                                <div className='flex gap-4'>
                                    <div className='tooltip bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700' data-tip="Facebook">
                                        <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                                    </div>
                                    <div className='tooltip bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700' data-tip="GitHub">
                                        <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                                    </div>
                                    <div className='tooltip bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700' data-tip="Linkedin">
                                        <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                                    </div>
                                    <div className='tooltip bg-[#F59E0B] text-white rounded-full w-8 h-8 p-[5px] cursor-pointer hover:bg-[#D97706] duration-700' data-tip="Instagram">
                                        <a href="https://www.instagram.com/parvejhasanpappu100/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={themeBlack == true ? "w-full bg-[#0F172A] p-8 rounded-lg duration-700" : "w-full bg-[#F9FAFB] p-8 rounded-lg duration-700"}>
                            <h3 className='text-2xl font-semibold uppercase'>Send Me a Message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                                <div className='flex flex-col md:flex-row gap-5'>
                                    <div className='w-full'>
                                        <input {...register("name", { required: true })} className={themeBlack == true ? "bg-[#0F172A] w-full py-4  px-3  border duration-700" : "bg-white w-full py-4  px-3  border duration-700"} placeholder='Name' type="text" />
                                        {errors.name && <span className='text-red-600'>Name is required</span>}
                                    </div>
                                    <div className='w-full'>
                                        <input {...register("email", { required: true })} className={themeBlack == true ? "bg-[#0F172A] w-full py-4  px-3  border duration-700" : "bg-white w-full py-4  px-3  border duration-700"} placeholder='Email' type="email" name="email" id="" />
                                        {errors.email && <span className='text-red-600'>Email is required</span>}
                                    </div>
                                </div>
                                <textarea {...register("message", { required: true })} className={themeBlack == true ? "bg-[#0F172A] w-full mt-5 p-5 text-xl  border duration-700" : "bg-white w-full mt-5 p-5 text-xl   border duration-700"} name="message" placeholder='Tell me more about your needs...' id="" cols="30" rows="5"></textarea>
                                {errors.message && <span className='text-red-600'>Please write something</span>}
                                <div className='flex justify-center'>
                                    <input disabled={sending} className='btn bg-[#F59E0B] text-white normal-case text-base px-6 rounded-md hover:bg-[#D97706]  duration-1000 border-none font-bold mt-5' type="submit" value={sending ? "Sending..." : "Send Message"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;