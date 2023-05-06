import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Image from '../../assets/banner/Vector.png'
import Image2 from '../../assets/banner/Vector-1.png'
import useTitle from '../../Title/useTitle';

const Statistics = () => {
    useTitle('statistics')
    const [chartDatas, setChartDatas] = useState([])
    useEffect(() => {
        fetch('marks.json')
            .then(res => res.json())
            .then(datas => setChartDatas(datas))
    }, [])

    return (
        <div className='mt-10 md:mt-0'>
            <div style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '200px',
            }} className=' bg-slate-50'>
                <h2 className='text-2xl text-center font-bold '>Assignments Marks Statistics</h2>
                <div className=' absolute right-10 top-0'>
                    <img src={Image2} alt="" />
                </div>
            </div>

            <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={chartDatas.length > 0 && chartDatas}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" fontSize={14} />
                    <Radar
                        dataKey="obtain-mark"
                        stroke="#8C0000"
                        dot={{ fill: '#8884d8', r: 4 }}
                        fill="#208C00"
                        fillOpacity={0.6}
                        name="obtain-mark"
                        unit="marks"
                    />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;