import { Suspense, lazy } from 'react';
import { useUserStore } from "./store/loginStore";
import { useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import Loading from './Loading';
import ProtectedRoute from './ProtectedRoute';
import { Navigate } from 'react-router-dom';

const LoginDashboard = lazy(() => import('./Login/LoginDashboard')); // Lazy load the LoginDashboard component
const Aplicacion = lazy(() => import('./Main/Aplicacion')); // Lazy load the Aplicacion compo

function App() {

  const {setUserData} = useUserStore();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || sessionStorage.getItem('userData'));
    userData!== '' || userData!== null ? setUserData(userData) : setUserData(null);
  },[setUserData]);

  const {userData} = useUserStore();

  console.log('userData in App.jsx',userData)

  return (
    <>
    <Suspense fallback={<Loading/>}>
    <Routes>
      {userData? 
      <Route path='/' element={<Navigate to='/dashboard' replace/>}/>
      : <Route path='/' element={<LoginDashboard/>}/>
      }
      <Route path='/dashboard/*' element={
        <ProtectedRoute userData={userData}>
          <Aplicacion
          userName={userData?.name}
          roleid={userData?.roleid}
          token={userData?.token}
          />
        </ProtectedRoute>
      }/>
      <Route path='*' element={<h1 style={{color:'black'}}>RUTA NO ENCONTRADA</h1>}/>
    </Routes>
    </Suspense>
    </>
  )
};

export default App
