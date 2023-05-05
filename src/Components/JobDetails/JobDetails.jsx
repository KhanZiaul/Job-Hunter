import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Salary from '../../assets/Icons/Frame.png'
import Frame from '../../assets/Icons/Frame-1.png'
import Phone from '../../assets/Icons/Frame-2.png'
import Email from '../../assets/Icons/Frame-3.png'
import Location from '../../assets/Icons/Frame-4.png'
import Image from '../../assets/banner/Vector.png'
import Image2 from '../../assets/banner/Vector-1.png'
import { addToDb } from '../LocalStorage/LocalStorage';

const JobDetails = () => {
    const { id } = useParams()
    const jobs = useLoaderData()
    const matchingJob = jobs.find(job => job.id == id)

    return (
        <div className='mt-10 md:mt-0'>
            <div style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat', 
                width: '100%',
                height: '200px',
            }} className=' bg-slate-50'>
                <h2 className='text-2xl text-center font-bold '>Job Details</h2>
                <div className=' absolute right-10 top-0'>
                    <img src={Image2} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 my-10 gap-10'>
                <div>
                    <p className='mb-8'><span className='font-bold'>Job Description : </span>{matchingJob.jobDescription}</p>
                    <p className='mb-8'><span className='font-bold'>Job Responsibility : </span>{matchingJob.jobResponsibility}</p>
                    <p className='mb-8'><span className='font-bold'>Educational Requirements : </span><br /> {matchingJob.educationalRequirements}</p>
                    <p><span className='font-bold'> Experiences : </span> <br />{matchingJob.experiences}</p>
                </div>


                <div>
                    <div className='border-gray-400 bg-gray-100 rounded-md ps-10 p-7'>
                        <h2 className='text-xl font-bold mb-6'>Job Details</h2>
                        <hr />
                        <div className='mt-6'>
                            <div className='flex gap-3 mb-5'>
                                <img src={Salary} alt="" />
                                <p><span className='font-bold'>Salary  : </span>{matchingJob.salary}</p>
                            </div>
                            <div className='flex gap-3 mb-7'>
                                <img src={Frame} alt="" />
                                <p><span className='font-bold'>Job Title : </span>{matchingJob.jobTitle}</p>
                            </div>
                        </div>

                        <h2 className='text-xl font-bold mb-6 mt-5'>Contact Information</h2>
                        <hr />
                        <div className='flex gap-3 mt-5 mb-7'>
                            <img src={Phone} alt="" />
                            <p><span className='font-bold'>Phone : </span>{matchingJob.contactInformation.phone}</p>
                        </div>

                        <div className='flex gap-3 mb-7'>
                            <img src={Email} alt="" />
                            <p><span className='font-bold'>Email : </span>{matchingJob.contactInformation.email}</p>
                        </div>

                        <div className='flex gap-3 mb-7'>
                            <img src={Location} alt="" />
                            <p><span className='font-bold'>Address : </span>{matchingJob.location}</p>
                        </div>
                    </div>
                    <button onClick={() => addToDb(matchingJob.id)} className='btn-nav text-white px-5 py-3 rounded-lg my-5 w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;