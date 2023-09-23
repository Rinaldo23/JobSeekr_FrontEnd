import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function RecentJobsSection() {
    const [recentJob, setRecentJob] = useState([]);

    useEffect(() => {
        const fetchRecentJobs = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/recentJob`)
            setRecentJob(res.data)
        }
        fetchRecentJobs()
    }, [])

    return (

        <div className='flex flex-col'>
            <h2 className='m-auto pt-4 pb-8 md:text-2xl text-xl'>Recent Jobs</h2>

            {
                recentJob.map((job) => (
                    <div key={job?._id} className='col-span-2 px-2 flex mb-4'>
                        {/* <img className='md:w-24 md:h-24 w-16 h-16 object-fit md:rounded-lg mr-4 md:ml-4' src={job.image} alt={job.title} /> */}
                        <Image className='md:w-24 md:h-24 w-16 h-16 object-fit md:rounded-lg mr-4 md:ml-4' src={job.image} alt={job.title} width={100} height={100} />
                        <div className='flex flex-col'>
                            <h6 className='md:text-lg text-base'>{job.title}</h6>
                            <p className='md:text-base text-xs'>{job.date}</p>
                            <p className='md:text-sm text-xs'>{job.desc.split(/\s+/).slice(0, 10).join(" ") + " ..."}</p>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default RecentJobsSection