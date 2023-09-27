// pages/protected.js
import JobForm from '@/components/JobForm';
import ProtectedRoute from '../components/ProtectedRoute';

function ProtectedPage() {
    return (
        <ProtectedRoute>
            <div>
                <h1>Protected Page</h1>
                {/* Protected content */}
                <JobForm />
            </div>
        </ProtectedRoute>
    );
}

export default ProtectedPage;