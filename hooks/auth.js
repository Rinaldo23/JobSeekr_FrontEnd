import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export function useAuth() {
    const router = useRouter();

    // Check the user's authentication status here
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with your authentication logic

    useEffect( () => {
        // Access cookies on the client side
        const cookieValue = document.cookie;
        
        // const res = await axios.post(`http://localhost:8000/api/auth/verifyToken`, { cookieValue });

        // if (res.data.auth === true) {
        //     setIsAuthenticated(true);
        // }else{
        //     setIsAuthenticated(false);
        // }

        if (!isAuthenticated) {
            router.push('/signin'); // Redirect to the login page if the user is not authenticated
        }
    }, [isAuthenticated, router]);

    return isAuthenticated;
}
