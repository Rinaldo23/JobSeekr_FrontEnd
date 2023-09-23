import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Card({ data }) {

    return (
        <Link href={`/jobs/${data?._id}`} style={{ textDecoration: "none" }}>

            <div key={data._id} className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img src={data.image} alt={"ddd"} className="w-full h-48 object-cover" /> */}
                <Image className="w-full h-48 object-cover" src={data.image} width={100} height={100} />

                <div className="md:p-4 p-2">
                    <p className="text-gray-500 md:text-sm text-xs">{data.date}</p>
                    <h2 className="md:text-xl text-base font-semibold md:mt-2">{data.title.split(/\s+/).slice(0, 10).join(" ")}</h2>
                    <p className="md:mt-2 text-sm">{data.desc.split(/\s+/).slice(0, 24).join(" ") + " ..."}</p>
                </div>
            </div>

        </Link>
    )
}

export default Card