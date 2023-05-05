import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(datas => setCategorys(datas))
    }, [])

    return (
        <div className='my-20'>

            <h2 className='text-center text-4xl font-bold mb-5'>Job Category List </h2>
            <p className='text-center text-gray-400 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    categorys.map(category => {

                        return (
                            <div key={category.id} className='bg-gray-100 ps-12 py-7 rounded-xl'>
                                <img className='mb-4' src={category.category_logo} alt="no-image" />
                                <p className='font-bold mb-2'>{category.category_name}</p>
                                <p className='text-gray-400 mb-3'>{category.jobs_available} Jobs Available</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default JobCategory;