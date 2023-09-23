// pages/job/[jobid].js
import Footers from '@/components/Footers';
import HomeSideSection from '@/components/HomeSideSection';
import JobMainSideSection from '@/components/JobMainSideSection';
import Navbar from '@/components/NavBar';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const JobDetailPage = () => {
  const router = useRouter();
  const { jobid } = router.query;
  const [singleJob, setSingleJob] = useState({});

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/find/${jobid}`);
        setSingleJob(res.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    }

    if (jobid) {
      fetchSingleJob();
    }
  }, [jobid]);

  return (
    <>
      {/* Job ID: {jobid} */}
      <Head> </Head>
      <Navbar />
      <div className='md:pt-24 pt-20 grid md:grid-cols-3 md:m-auto grid-cols-1 max-w-screen-xl'>
        <JobMainSideSection obj={singleJob} />
        <HomeSideSection />
      </div>
      <Footers />
    </>

  );
};

export default JobDetailPage;
