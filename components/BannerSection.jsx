import React from 'react'
import Image from 'next/image'
import ListItem from './CardListItem'
import Link from 'next/link'
// import AboutImg from '../public/assets/projects/AirBnbClone.png'

function BannerSection({ image, date, title, desc, _id }) {
    // console.log(_id)
    return (

        <Link href={`/jobs/${_id}`} style={{ textDecoration: "none" }}>
            <div className='col-span-2 md:px-6 px-2 md:pt-6 md:h-[600px] pb-4'>
                {/* <img className='md:h-3/4 w-full object-cover md:rounded-xl rounded-lg' src={image} alt={""} /> */}
                <Image className='md:h-3/4 w-full object-cover md:rounded-xl rounded-lg' src={image} width={100} height={100} />
                <p className='md:mt-4 mt-1 md:text-base text-xs'>{date}</p>
                <h2 className='md:mt-2 mt-1 md:text-xl text-base'>{title}</h2>
                <p className='md:mt-2 mt-1 md:text-base text-sm'>{desc}</p>
                {/* <ListItem/> */}
                <hr className="w-2/3 h-0.5 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10" />

            </div>
        </Link>
    )
}

export default BannerSection