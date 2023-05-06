import React from 'react';
import headerImage from '../../assets/banner/P3OLGJ1 copy 1.png'
import useTitle from '../../Title/useTitle';

const Header = () => {
    useTitle('home')
    return (
        <div className='md:flex flex-col-reverse md:flex-row justify-between items-center gap-5 md:gap-0'>
            <div>
                <h2 className='text-2xl md:text-7xl font-semibold leading-normal mb-5'>One Step <br /> Closer To Your<br /><span className='text-indigo-400'>Dream Job</span></h2>

                <p className='text-gray-500 mb-5'>Explore thousands of job opportunities with all the <br />  information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                <button className='btn-nav text-white px-5 py-3 rounded-lg'>Star Applying</button>
            </div>
            <img className='mt-16 md:mt-0 w-full md:w-[750px] md:h-[700px]' src={headerImage} alt="" />
        </div>
    );
};

export default Header;