//Aplicacion.jsx
// En este codigo se agrupa Navbar y la funcionalidad de aplicacion.
// La app estara compuesta de Sidebar y Funcionalidades
import './Aplicacion.css';
import Navbar from "../components/Navbar/Navbar"
import Sidebar from '../components/Sidebar/Sidebar';
import Contenido from './Funcionalidad/Contenido/Contenido';

const Aplicacion = () => (
    <div className='aplicacion'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='funcionalidad'>
            <Sidebar roleid={1}/>
            <Contenido roleid={1}/>
        </div>
    </div>
);

export default Aplicacion;