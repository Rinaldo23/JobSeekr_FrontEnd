// ProtectedRoute.js
import { useAuth } from '../hooks/auth';

function ProtectedRoute({ children }) {
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
        return children;
    } else {
        return <p>You need to log in to access this page.</p>;
    }
}

export default ProtectedRoute;