import Navbar from '@/components/NavBar'
import Footers from '@/components/Footers'
import HomeMainSection from '@/components/HomeMainSection'
import HomeSideSection from '@/components/HomeSideSection'

export default function Home() {

  return (

    <div className='h-screen box-content'>

      <Navbar />

      <div className='md:pt-24 pt-20 grid md:grid-cols-3 md:m-auto grid-cols-1 max-w-screen-xl'>
        <HomeMainSection />
        <HomeSideSection />
      </div>

      <Footers />

    </div>
  )
}
