import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';


const Home = () => {
    return (
        <div>
            <div>
                <div className='bg-slate-50'>
                <Header></Header>
                </div>
                <JobCategory></JobCategory>
         
            </div>
        </div>
    );
};

export default Home;