import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/router';


function signIn() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, { name, password });
            const res = await axios.post(`http://localhost:8000/api/auth/signin`, { name, password });
            // console.log(res.data.token)
            router.push('/protected');
            document.cookie = `access_token=${res.data.token}`;
            
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <form className="mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="username" 
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-md px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-md px-3 py-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default signIn