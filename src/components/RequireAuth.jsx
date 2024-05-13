import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const RequireAuth = () => {

    const { userDetails} = useAuthContext();
    const location = useLocation();
  
    const isAuthenticated= userDetails.authToken;

  return (
    isAuthenticated ? <Outlet/> : 
    <Navigate to="/signonportal" state={{ from: location }} replace/>
  )
}

export default RequireAuth