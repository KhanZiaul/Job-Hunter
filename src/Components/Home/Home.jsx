import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <div>
                <div className='bg-slate-50'>
                <Header></Header>
                </div>
                <JobCategory></JobCategory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;