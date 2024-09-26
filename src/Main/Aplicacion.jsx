//Aplicacion.jsx
// En este codigo se agrupa Navbar y la funcionalidad de aplicacion.
// La app estara compuesta de Sidebar y Funcionalidades
import './Aplicacion.css';
import Navbar from "./components/Navbar/Navbar"
import Sidebar from './components/Sidebar/Sidebar';
import Contenido from './Contenido';

const Aplicacion = ({userName,roleid,token}) => (
    <div className='aplicacion'>
        <div className='navbar'>
            <Navbar name={userName}/>
        </div>
        <div className='funcionalidad'>
            <Sidebar roleid={roleid}/>
            <Contenido roleid={roleid}/>
        </div>
    </div>
);

export default Aplicacion;