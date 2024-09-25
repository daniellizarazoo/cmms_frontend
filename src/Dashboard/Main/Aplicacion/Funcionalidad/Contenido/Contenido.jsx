/* eslint-disable react/prop-types */
import './Contenido.css'
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
    if(roleid===1){
        return (
            <div className='contenido'>
                <Routes>
                    <Route path='/admin' element={<UserPage />} />
                    <Route path='/equipos' element={<AssetsPage />} />
                    <Route path='/mantenimientopredictivo' element={<PredictiveMaintenance />} />
                    <Route path='/ordentrabajo' element={<WorkOrder roleid={roleid} />} />
                    <Route path='/reportemantenimiento' element={<MaitenanceReport/>} />
                    <Route path='/reportes' element={<Reports/>} />
                </Routes>
            </div>
        )
    } else if(roleid===5){
        return (
            <div className='contenido'>
                <Routes>
                    <Route path='/equipos' element={<AssetsPage />} />
                    <Route path='/ordentrabajo' element={<WorkOrder roleid={roleid} />} />
                    <Route path='/reportemantenimiento' element={<MaitenanceReport/>} />
                </Routes>
            </div>
    );
    }
};

export default Contenido;