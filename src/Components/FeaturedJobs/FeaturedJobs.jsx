import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs.jsx';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [limitedData, setAllData] = useState(true)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(datas => setJobs(datas))
    }, [])

    return (
        <div className='mb-20'>
            <h2 className='text-center text-4xl font-bold mb-5'>Featured Jobs</h2>
            <p className='text-center text-gray-400 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {
                    jobs.slice( 0 , limitedData ? 4 : 6).map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <button onClick={() => setAllData(!limitedData)} className={`btn-nav text-white px-5 py-3 rounded-lg ${limitedData ? 'block' : 'hidden'} mx-auto my-10 `}>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;