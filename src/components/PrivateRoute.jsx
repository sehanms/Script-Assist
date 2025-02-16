import { useAuthStore } from '../store/auth';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default PrivateRoute;
