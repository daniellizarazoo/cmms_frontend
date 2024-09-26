/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({userData,children}) => {
    if(!userData){
        return <Navigate to='/?notLogged=true' replace/>
    }
    return children;
};

export default ProtectedRoute;