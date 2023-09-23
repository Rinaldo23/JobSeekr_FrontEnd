import React from 'react'
import SiteDescSetion from './SiteDescSetion'
import RecentJobsSection from './RecentJobsSection'

function HomeSideSection() {

  return (

    <div className='col-span-1 h-auto w-full'>
      {/* 1. Site Desc */}
      <SiteDescSetion />

      {/* 2. Recent Jon List */}
      <RecentJobsSection />
    </div>

  )
}

export default HomeSideSection