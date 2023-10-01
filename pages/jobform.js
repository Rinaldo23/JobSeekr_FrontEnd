'use client'
import Footers from '@/components/Footers'
import JobForm from '@/components/JobForm'
import Navbar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'

function jobform() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const key = localStorage.getItem('access_token');

        setToken(key);
    }, [])

    console.log(token)

    return (
        <div className='h-screen box-content'>
            {
                token !== null ? <JobForm token={token}/> : "Chal Nikal Bhomsadike!!!"
            }
        </div>
    )
}

export default jobform