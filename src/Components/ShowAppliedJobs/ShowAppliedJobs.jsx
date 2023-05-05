import React, { useState } from 'react';
import Location from '../../assets/Icons/Location Icon.png'
import Frame from '../../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({ appliedJob }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fullTimeOrPartTime, location, salary } = appliedJob;
    return (
        <div className='border-2 border-gray-200 p-5 md:ps-10 md:py-7 rounded-md md:flex justify-between items-center'>
            <div className='md:flex justify-between items-center gap-8'>
                <div className='bg-gray-100 rounded-md px-5 py-12'>
                    <img className='w-[150px] h-[40px] mb-4 ' src={companyLogo} alt="" />
                </div>

                <div>
                    <p className='text-xl font-semibold'>{jobTitle}</p>
                    <p className='text-gray-400 font-medium'>{companyName}</p>
                    <div className='flex flex-col md:flex-row gap-3 my-4'>
                        <button className='border-2 border-blue-500 px-5 py-3 font-bold hover:bg-blue-600 hover:text-white rounded-md'>{remoteOrOnsite}</button>
                        <button className='border-2 border-blue-500 px-5 py-3 font-bold  hover:bg-blue-600 hover:text-white rounded-md'>{fullTimeOrPartTime}</button>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex gap-3'>
                            <img src={Location} alt="" />
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-3'>
                            <img src={Frame} alt="" />
                            <p>Salary  : {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                    <button className='btn-nav text-white px-5 py-3 rounded-lg my-5'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ShowAppliedJobs;