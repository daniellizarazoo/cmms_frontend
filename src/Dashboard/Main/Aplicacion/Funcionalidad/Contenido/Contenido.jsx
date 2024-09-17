import './Contenido.css'
import UserPage from './Pages/UsersPage';
import AssetsPage from './Pages/AssetsPage';
import PredictiveMaintenance from './Pages/PredictiveMaintenance';
import WorkOrder from './Pages/workOrder';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Contenido = ({roleid}) => {
    return (
        <Router>
            <div className='contenido'>
                <Routes>
                    <Route path='/admin' element={<UserPage/>}/>
                    <Route path='/equipos' element={<AssetsPage/>}/>
                    <Route path='/mantenimientopredictivo' element={<PredictiveMaintenance/>}/>
                    <Route path='/ordentrabajo' element={<WorkOrder roleid={roleid}/>}/>
                </Routes>
            </div>
        </Router>
    )
};

export default Contenido;