import  { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const location = useLocation()
    const {currentUser,loading}=useContext(authContext)
    if(loading){
        return  <div>WAIT A SECOND ...</div>
       
    }
   
    
    if(currentUser ){
        return children
    }
   
        return <Navigate state={location.pathname}  to={"/login"} ></Navigate>
    
       
      
   
};

export default PrivetRoutes;