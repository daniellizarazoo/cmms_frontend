/* eslint-disable react/prop-types */
//Content.jsx
import UserPage from './Pages/UsersPage';
import AssetsPage from './Pages/AssetsPage';
import PredictiveMaintenance from './Pages/PredictiveMaintenance';
import WorkOrder from './Pages/WorkOrder';
import MaitenanceReport from './Pages/MaintenanceReport';
import Reports from './Pages/Reports';

// import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';

const Contenido = ({ roleid }) => {
    // Renderizado en base a roleid

    return(
        <div style={{height:'100%', width:'100vw',overflow:'auto'}}>
            <Routes>
                {roleid===1 && 
                (<>
                <Route path='admin' element={<UserPage />} />
                <Route path='equipos' element={<AssetsPage />} />                    
                <Route path='mantenimientopredictivo' element={<PredictiveMaintenance />} />
                <Route path='ordentrabajo' element={<WorkOrder roleid={roleid} />} />
                <Route path='reportemantenimiento' element={<MaitenanceReport/>} />
                <Route path='reportes' element={<Reports/>} />
                <Route path='*' element={<h1 style={{color:'green'}}>La página que buscabas no se encontró</h1>}/>
                </>)
                }
                {roleid===5 &&(
                    <>
                    <Route path='equipos' element={<AssetsPage />} />
                    <Route path='ordentrabajo' element={<WorkOrder roleid={roleid} />} />
                    <Route path='reportemantenimiento' element={<MaitenanceReport/>} />
                    <Route path='*' element={<h1 style={{color:'green'}}>La página que buscabas no se encontró</h1>}/>
                    </>
                )}
            </Routes>
        </div>
    );

    
};

export default Contenido;