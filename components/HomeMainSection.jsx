import React, { useEffect, useState } from 'react'
import BannerSection from './BannerSection'
import CardListItem from './CardListItem'
import axios from 'axios'

function HomeMainSection() {
  const [bannerJob, setBannerJob] = useState([])
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/allJob`)
      setBannerJob(res.data[0])
      setJobs(res.data)
    }
    fetchJobs()
  }, [])

  return (

    <div className='col-span-2 md:h-46 w-full h-auto'>

      {/* 1.Banner */}
      <BannerSection data={bannerJob} />

      {/* 2.CardList */}
      <CardListItem cardData={jobs} />

    </div>

  )
}

export default HomeMainSection