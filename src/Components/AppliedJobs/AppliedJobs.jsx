import React, { useEffect, useState } from 'react';
import Image from '../../assets/banner/Vector.png'
import Image2 from '../../assets/banner/Vector-1.png'
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobsCart } from '../LocalStorage/LocalStorage';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import JobDetails from '../JobDetails/JobDetails';

const AppliedJobs = () => {

    const datas = useLoaderData()
    let getAppliedJobsId = getAppliedJobsCart()
    const [matchDatas, setMatchDatas] = useState([])
    const [isTure,setIsTrue] = useState(true)
    const [onsitOrRemoteDatas , setOnsitOrRemoteDatas] = useState([])

    useEffect(() => {
        let appliedJobs = [];
        for (const id in getAppliedJobsId) {
            const matchedID = datas.find(data => data.id == id)
            appliedJobs.push(matchedID)
        }
        setMatchDatas(appliedJobs)
    }, [])

    function filterHandlerOnsite() {
        let onsiteJobs = matchDatas.length > 0 && matchDatas.filter(matchData => matchData.remoteOrOnsite === 'Onsite')
        setOnsitOrRemoteDatas(onsiteJobs)
        setIsTrue(false)
    }

    function filterHandlerRemote() {

        let remoteJobs = matchDatas.length > 0 && matchDatas.filter(matchData => matchData.remoteOrOnsite === 'Remote')
        setOnsitOrRemoteDatas(remoteJobs)
        setIsTrue(false)
    }

    return (
        <div className='mt-10 md:mt-0'>
            <div style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '200px',
            }} className='bg-slate-50 mb-16'>
                <h2 className='text-2xl text-center font-bold'>Applied Jobs</h2>
                <div className=' absolute right-10 top-0'>
                    <img src={Image2} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-8 justify-between my-8'>

                <button onClick={filterHandlerOnsite} className=' btn-nav text-white px-5 py-3 rounded-lg'>Show Onsite Jobs</button>

                <button onClick={filterHandlerRemote} className=' btn-nav text-white px-5 py-3 rounded-lg'>Show Remote Jobs</button>

            </div>

            <div className='flex flex-col gap-5 rounded-md'>
                {
                    isTure && matchDatas.length > 0 ? matchDatas.map(appliedJob => <ShowAppliedJobs key={appliedJob.id} appliedJob={appliedJob}></ShowAppliedJobs>) : onsitOrRemoteDatas.map(appliedJob => <ShowAppliedJobs key={appliedJob.id} appliedJob={appliedJob}></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;