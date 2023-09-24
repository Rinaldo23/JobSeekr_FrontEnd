import Image from 'next/image';
import React from 'react';

const JobMainSideSection = ({ obj }) => {

    return (
        <div className='col-span-2 h-46 w-full'>
            <div className='max-w-[1240px] m-auto md:mt-8 mt-2 md:grid grid-cols-3 gap-8'>

                <div className='col-span-3 md:px-6 px-2 '>
                    <img className='md:h-1/4 w-full object-cover md:rounded-xl rounded-lg' src={obj.image} alt={""} />
                    {/* <Image className='md:h-1/4 w-full object-cover md:rounded-xl rounded-lg' src={obj.image} alt={""} width={100} height={100} /> */}
                    <p className='md:mt-4 mt-1 md:text-base text-xs'>{obj.date}</p>

                    <div className='md:mt-6 mt-2'>
                        <div className='md:mt-2 mt-1'>
                            <strong>Company Name: </strong> : {obj.companyname}
                        </div>
                        <div className='md:mt-2 mt-1'>
                            <strong>Job Role: </strong> : {obj.designation}
                        </div>
                        <div className='md:mt-2 mt-1'>
                            <strong>Experience: </strong> : {obj.experience}
                        </div>
                        <div className='md:mt-2 mt-1'>
                            <strong>Batch: </strong> : {obj.batch}
                        </div>
                        <div className='md:mt-2 mt-1'>
                            <strong>Location: </strong> : {obj.location}
                        </div>

                        {
                            obj?.jobDesc?.length == 0
                                ? ""
                                : <div className='md:mt-4 mt-2'>
                                    <h2 className='md:mt-2 mt-1 md:text-base text-xl'>Job Description :</h2>
                                    {
                                        obj?.jobDesc?.map((data, idx) => (
                                            <li key={idx} className='md:mt-4 mt-2 md:text-base text-sm'>{data}</li>
                                        ))
                                    }

                                </div>
                        }

                        {
                            obj?.jobResponsibilities?.length == 0
                                ? ""
                                : <div className='md:mt-4 mt-2'>
                                    <h2 className='md:mt-2 mt-1 md:text-base text-xl'>Job Description :</h2>
                                    {
                                        obj?.jobResponsibilities?.map((data, idx) => (
                                            <li key={idx} className='md:mt-4 mt-2 md:text-base text-sm'>{data}</li>
                                        ))
                                    }

                                </div>
                        }

                        <div className='mt-4 '>
                            <h2 className='md:mt-2 mt-1 md:text-base text-xl'>Eligibility</h2>
                            <p className='md:mt-4 mt-2 md:text-base text-sm'>{obj.eligibility}</p>
                        </div>

                        {
                            obj?.skills?.length == 0
                                ? ""
                                : <div className='mt-4'>
                                    <h2 className='md:mt-2 mt-1 md:text-base text-xl'>Skills</h2>
                                    {
                                        obj?.skills?.map((data, idx) => (
                                            <li key={idx} className='text-sm ml-2 mt-1'>{data}</li>
                                        ))
                                    }
                                </div>
                        }

                        <h4 className='mt-4 md:text-base text-md'>How to Apply for {obj.companyname} ?</h4>
                        <p className='md:mt-4 mt-2 md:text-base text-sm'>Eligible candidates apply for this Drive online by following the below link.</p>
                        <div className='flex justify-center'>
                            <button className='mt-4 font-bold h-10 w-40'>
                                <a href={obj.applyLink}>Apply Now</a>
                            </button>
                        </div>


                        {/* <h4 className='mt-4 md:text-base text-md'>Also Apply For:– </h4> */}
                        {/* <div className='flex justify-center'>
                            <button className='mt-4 font-bold h-10 w-40'>
                                <a href={obj.applyLink}>Apply Link</a>
                            </button>
                        </div> */}
                        {/* <p className='md:mt-4 mt-2 md:text-base text-sm'>Also Apply for Other Jobs ...!</p> */}
                        {/* <p className='md:mt-4 mt-2 md:text-base text-sm'>NxtWave is hiring for Freshers for Associate</p> */}
                    </div>

                </div>

            </div>
            {/* </div> */}
        </div>
    );
};

export default JobMainSideSection;